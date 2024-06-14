import { useEffect, useState } from "react";
import { BtnListComponent } from "../../components/BtnListComponent/BtnListComponent";
import { BtnSelectedView } from "../../components/BtnListComponent/Style";
import { ContainerMain, ContainerUser } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
// import { ListBook } from "../../components/ListBook/ListBook";
import { CardList } from "../../components/CardList/CardList";
import { FlatListBook } from "../../components/ListBook/Style";
import { Text } from "react-native";
import { BtnReserve } from "../../components/BtnReserve/BtnReserve";
import { RequestModal } from "../../components/RequestModal/RequestModal";
import { BookModal } from "../../components/BookModal/BookModal";
import { ProfileInfo } from "../../utils/Auth";
import api from "../../services/service";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Livros = [
  {
    id: 1,
    titulo: "Felipe Neto, A tragetória de um dos maiores youtubers do mundo",
    autor: "Felipe Neto",
    dataEntrega: "15/06/2024",
    situacao: "lendo",
  },
  {
    id: 2,
    titulo: "É assim que acaba",
    autor: "Sandra Coleen",
    dataEntrega: "15/06/2024",
    situacao: "lendo",
  },
  {
    id: 3,
    titulo: "Diario de um banana",
    autor: "Jeff Kiney",
    dataEntrega: "10/06/2024",
    situacao: "lido",
  },
  {
    id: 4,
    titulo: "O diario perdido",
    autor: "Alex Hirsch",
    dataEntrega: "10/06/2024",
    situacao: "lido",
  },
];

export const Main = ({ navigation }) => {
  const [statusLista, setStatusLista] = useState("lendo");
  const [showBookModal, setShowBookModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [perfilUsuario, setPerfilUsuario] = useState("");
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [idUsuario, setIdUsuario] = useState("");
  const [livro, setLivro] = useState([]);
  const [reload , setReload] = useState(false);
  const [livroList, setLivroList] = useState([]);

 
  const [idEmprestimo, setIdEmprestimo] = useState({})

     // States para verficar os dias
     const [diaAtual, setDiaAtual] = useState()
     const [diaDevolucao, setDiaDevolucao] = useState()
  async function listBooks(idUsuario) {
    try {
      await api.get(
        `/EmprestimoLivro/ListarMeus/${idUsuario}`
      ).then(async (response) => {
        setLivro(response.data);
        const formattedDate = new Date(item.dataDevolucao).toLocaleDateString('pt-BR')
        setIdEmprestimo(response.data[0].idEmprestimoLivro)
      });

    } catch (error) {
      console.log(error);
    }
  }


  function AtualizarStatus(idEmprestimo) {
    const currentDate = new Date();
    setDiaAtual(currentDate.getTime())

    livro.forEach(async (item) => {

        const dataComoObjeto = new Date(item.dataDevolucao);
        const dataComoInteiro = dataComoObjeto.getTime();

        setDiaDevolucao(dataComoInteiro);
        if (dataComoInteiro <= currentDate.getTime()) {
            await api.put(`/EmprestimoLivro/AtualizarStatus?id=${item.idEmprestimoLivro}`, {
              situacao: "lido"
            }).then(() => {
              listBooks(idUsuario)
            })
            setReload(true)
        }

        //console.log(item.id);
    });
  }
  async function Logout(navigation) {
    try {
      await AsyncStorage.removeItem("token");

      //verifica se o token foi apagado com sucesso
      const tokenAfterLogout = await AsyncStorage.getItem("token");
      if (tokenAfterLogout === null) {
        console.log("Token apagado 😶‍🌫️");
      } else {
        console.log("Falha ao apagar o token 🤕");
      }

      //Ir para tela de login
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.error("Erro ao limpar token", error);
    }
  }

  function test1() {
    setStatusLista("lendo");
  }

  function test2() {
    setStatusLista("lido");
  }

  function GoToBookScreen() {
    navigation.navigate("BookInfo");
    setShowBookModal(false);
  }

  const CarregarDadosUsuario = async (idUsuario) => {
    await api.get(`/Usuario/BuscarPorId/${idUsuario}`)
    .then( async (response) => {
      setDadosUsuario(response.data);

      await listBooks(idUsuario);
    })
    .catch((erro) => {
      console.log(erro);
    });
  };


  useEffect(() => {
    console.log("EMPRESTIMOOOOOO!!!!");
    console.log(idEmprestimo)
    ProfileInfo()
      .then(async (token) => {
        setPerfilUsuario(token.perfil);

        setIdUsuario(token.id);

        await CarregarDadosUsuario(token.id);

        await AtualizarStatus();
      })
      .catch((erro) => {
        console.log(`Não foi possível buscar as informações do usuário`);
        console.log(`Erro: ${erro}`);
      });
  }, [idEmprestimo])

  return (
    <ContainerMain>
      <Header
        source={{uri : dadosUsuario.foto}}
        headerName={dadosUsuario.nome}
        headerID={dadosUsuario.email}
        onPress1={() => navigation.navigate("Profile")}
        onPress2={() => Logout(navigation)}
      />

      <BtnSelectedView>
        <BtnListComponent
          buttonText={"Lendo"}
          clickButton={statusLista === "lendo"}
          onPress={() => test1()}
        />
        <BtnListComponent
          buttonText={"Lido"}
          clickButton={statusLista === "lido"}
          onPress={() => test2()}
        />
      </BtnSelectedView>

      <FlatListBook
        data={livro}
        keyExtractor={(item) => item.id}
        renderItem=
        {({ item }) =>
          // <Text style={{ color : "#fbfbfb"}}>Hello world</Text>
          statusLista == item.situacao && (
            <CardList
           
              bookName={`${item.livro.titulo.substr(0, 23)}${item.livro.titulo.length >= 23 ? "..." : ""
                }`}
              bookAuthor={item.livro.autor}
              returnDate= {moment(item.dataDevolucao).format("DD/MM/YYYY")}
              status={item.situacao}
              source={{uri:item.capa}}
              onPress={() => setShowBookModal(true)}
            />
          )
        }
        showsVerticalScrollIndicator={false}
      />

      <BookModal
        visible={showBookModal}
        setShowBookModal={setShowBookModal}
        navigation={navigation}
        onPress={() => GoToBookScreen()}
        onPressCancel={() => setShowBookModal(false)}
      />

      <BtnReserve onPress={() => setShowRequestModal(true)} />
      <RequestModal
        visible={showRequestModal}
        showModal={setShowRequestModal}
        navigation={navigation}
      />
    </ContainerMain>
  );
};
