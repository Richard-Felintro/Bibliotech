import { FlatList, TouchableOpacity, View } from "react-native";
import {
  ContainerAlternate,
  ContainerColumn,
  ContainerGradientDark,
  ContainerInput,
  ContainerRow,
} from "../../components/Container/Style";
import { InputBox, InputText } from "../../components/Input/Style";
import { BookThumbnail } from "../../components/Image/Style";
import { TextField } from "../../components/Text/TextField";
import {
  BookInfoContainer,
  CommentContainer,
  CommentFlatList,
  CommentButton,
  CommentTitle,
  IconField,
} from "./Style";
import { BookComment } from "../../components/Comment/Comment";
import { FavoriteCount, RatingCount } from "../../components/Icon/Icon";
import { ContainerIcon } from "../../components/Icon/Style";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { TextLeft, TextMedium } from "../../components/Text/Style";
import { useEffect, useState } from "react";
import Foundation from "@expo/vector-icons/Foundation";
import { Title } from "../../components/Title/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import api from "../../services/service";
import { Select } from "../../components/Select/Style";

export const BookInfoScreen = ({
  navigation
}) => {
  ///! DADOS MOCADOS
  const [bookId, setBookId] = useState({});
  const [selectedBook, setSelectedBook] = useState();

  //* Livro mocado
  const book = {
    id: 1,
    titulo: "Felipe Neto, A trajetória",
    genero: "Biografia",
    autor: "Nelipe Feto",
    editor: "Coquetel",
    isbn: 1254759812357,
    rating: 5.0,
    favCount: "15M",
  }

  //* Comentários mocados
  const [comments, setComments] = useState([
    {
      id: 0,
      username: "Murilo",
      date: "24 de maio",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      username: "Murilo",
      date: "24 de maio",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      username: "Murilo",
      date: "24 de maio",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      username: "Murilo",
      date: "24 de maio",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  //
  useEffect(() => {
    LoadBook();
  }, []);

  async function LoadBook() {
    
    const promise = await api.get("/Resenha/ListarResenhasComId/a50630d2-19b5-4f8f-9ea6-a6cbbd26631f")

    setSelectedBook(promise.data);

    console.log(promise.data.livro.titulo);
  }

  return (
    <ContainerGradientDark>
      <BookInfoContainer>
        <BookThumbnail
          source={require("../../assets/LOGO.png")}
        ></BookThumbnail>
        <ContainerColumn>
          {/* <TextField label={"Título:"} content={selectedBook.titulo} />
          <TextField label={"Gênero:"} content={selectedBook.genero} />
          <TextField label={"Autor:"} content={selectedBook.autor} />
          <TextField label={"Editor:"} content={selectedBook.editor} />
          <TextField label={"ISBN:"} content={selectedBook.isbn} /> */}
          <IconField>
            <ContainerIcon>
              <Entypo name="star" size={24} color="#468FAF" />
              <TextLeft>Teste</TextLeft>
            </ContainerIcon>
            <ContainerIcon>
              <AntDesign name="heart" size={20} color="#468FAF" />
              <TextLeft>Teste</TextLeft>
            </ContainerIcon>
          </IconField>
        </ContainerColumn>
      </BookInfoContainer>

      <CommentContainer>
        <InputBox>
          <CommentTitle>{"     Resenhas     "}</CommentTitle>
        </InputBox>

        <CommentFlatList
          nestedScrollEnabled
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BookComment
              userName={item.username}
              date={item.date}
              content={item.content}
            />
          )}
        />
      </CommentContainer>

      <CommentButton>
        <ContainerRow>
          <Foundation name="pencil" size={20} color="#A1D9DF" />
          <InputText placeholder={"Adicione sua resenha!"} />
        </ContainerRow>
      </CommentButton>

      <LinkButton onPress={() => navigation.navigate("BottonTab")}>
        <LinkText>sair</LinkText>
      </LinkButton>
    </ContainerGradientDark>
  );
};
