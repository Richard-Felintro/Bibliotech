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
  const [livro, setLivro] = useState("");
  useEffect(() => {
    listBooks();
  }, []);

  async function listBooks() {
    try {
      const retornoGet = await api.get(
        `/EmprestimoLivro/ListarMeus/${idUsuario}`
      );

      setLivro(retornoGet.data);

      console.log("EMPRESTIMO");
      console.log(retornoGet.data);
    } catch (error) {
      log(error);
    }
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

  useEffect(() => {
    listBooks();
  }, []);
  useEffect(() => {
    // console.log(statusLista);
  }, [statusLista]);

  function GoToBookScreen() {
    navigation.navigate("BookInfo");
    setShowBookModal(false);
    navigation.navigate("BookInfo");
    setShowBookModal(false);
  }

  useEffect(() => {
    ProfileInfo().then((token) => {
      setPerfilUsuario(token.perfil);
      setIdUsuario(token.id);
      CarregarDadosUsuario(token.idUsuario, token.perfil);
    });
  }, []);

  useEffect(() => {
    ProfileInfo()
      .then((token) => {
        setPerfilUsuario(token.perfil);
        setIdUsuario(token.id);
        CarregarDadosUsuario(token.idUsuario, token.perfil);
      })
      .catch((erro) => {
        console.log(`Não foi possível buscar as informações do usuário`);
        console.log(`Erro: ${erro}`);
      });
  }, [perfilUsuario]);

  useEffect(() => {
    if (idUsuario != "") {
      CarregarDadosUsuario(idUsuario, perfilUsuario);
    }
  }, [idUsuario]);

  const CarregarDadosUsuario = async (idUsuario, perfil) => {
    const idU = await api
      .get(`/Usuario/BuscarPorId/${idUsuario}`)
      .then((response) => {
        setDadosUsuario(response.data);
        console.log(idU);
      })
      .catch((erro) => {
        console.log(erro);
        // alert(erro)
      });
  };
};

return (
  <ContainerMain>
    <Header
      source={require("../../assets/murilo.png")}
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

    <FlatListBook>
      data={livro}
      keyExtractor={(item) => item.id}
      renderItem=
      {({ item }) =>
        // <Text>Hello world</Text>
        statusLista == item.situacao && (
          <CardList
            bookName={`${item.livro.titulo.substr(0, 23)}${
              item.livro.titulo.length >= 23 ? "..." : ""
            }`}
            bookAuthor={item.livro.autor}
            returnDate={moment(item.dataDevolucao).format("DD/MM/YYYY")}
            status={item.situacao}
            source={require("../../assets/bookImage.jpg")}
            onPress={() => setShowBookModal(true)}
          />
        )
      }
      showsVerticalScrollIndicator={false}
    </FlatListBook>

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
