import { useEffect, useState } from "react";
import { BtnListComponent } from "../../components/BtnListComponent/BtnListComponent";
import { BtnSelectedView } from "../../components/BtnListComponent/Style";
import {
  ContainerMain,
  ContainerUser,
} from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
// import { ListBook } from "../../components/ListBook/ListBook";
import { CardList } from "../../components/CardList/CardList";
import { FlatListBook } from "../../components/ListBook/Style";
import { Text } from "react-native";
import { BtnReserve } from "../../components/BtnReserve/BtnReserve";

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

export const Main = () => {
  const [statusLista, setStatusLista] = useState("lendo");

  function test1() {
    setStatusLista("lendo");
  }
  function test2() {
    setStatusLista("lido");
  }
  useEffect(() => {
    // console.log(statusLista);
  }, [statusLista]);

  return (
    // <ContainerUser>
    <ContainerMain>
      <Header
        source={require("../../assets/imageProfile.jpg")}
        headerName={"Pedro Félix Gentilezza"}
        headerID={"1096526001SP"}
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
        data={Livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          // <Text>Hello world</Text>
          statusLista == item.situacao && (
            <CardList
              bookName={`${item.titulo.substr(0, 23)}${
                item.titulo.length >= 23 ? "..." : ""
              }`}
              bookAuthor={item.autor}
              returnDate={item.dataEntrega}
              status={item.situacao}
              source={require("../../assets/bookImage.jpg")}
            />
          )
        }
        showsVerticalScrollIndicator={false}
      />

      <BtnReserve />
    </ContainerMain>
    // </ContainerUser>
  );
};
