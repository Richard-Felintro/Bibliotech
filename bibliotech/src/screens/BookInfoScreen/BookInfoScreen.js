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
import { ProfileInfo, userDecodeToken } from "../../utils/Auth";
import moment from "moment";

export const BookInfoScreen = ({ navigation, route }) => {
  const { bookData } = route.params;

  // /! DADOS MOCADOS
  const [commentContent, setCommentContent] = useState();
  const [idUsuario, setIdUsuario] = useState();

  async function SubmitComment() {
    const nya = userDecodeToken();
    console.log("Submit");
    console.log(commentContent);
    console.log(moment().format("YYYY-MM-DD"));
    console.log(idUsuario);
    console.log(bookData.idLivro);
    await api
      .post(`/Resenha`, {
        descricao: commentContent,
        exibe: true,
        dataComentario: moment().format("YYYY-MM-DD"),
        idUsuario: idUsuario,
        idLivro: bookData.idLivro,
      })
      .then((response) => {
        console.log(response.data);
        LoadComments();
        setCommentContent("");
      });
  }

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
  };

  //* Comentários mocados
  const [comments, setComments] = useState([]);

  //
  useEffect(() => {
    LoadComments();
    LoadUserData();
  }, []);

  async function LoadUserData() {
    await ProfileInfo().then(async (token) => {
      setIdUsuario(token.id);
      console.log(idUsuario);
    });
  }

  async function LoadComments() {
    console.log(bookData);
    await api
      .get(`/Resenha/ListarResenhasComId/${bookData.idLivro}`)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      });
  }
  return (
    <ContainerGradientDark>
      <BookInfoContainer>
        <BookThumbnail source={{ uri: bookData.capa }} />
        <ContainerColumn>
          <TextField label={"Título:"} content={bookData.titulo} />
          <TextField label={"Gênero:"} content={bookData.genero.tituloGenero} />
          <TextField label={"Autor:"} content={bookData.autor} />
          <TextField label={"Editora:"} content={bookData.editora} />
          <TextField label={"ISBN:"} content={bookData.isbn} />
          {/* <IconField>
            <ContainerIcon>
              <Entypo name="star" size={24} color="#468FAF" />
              <TextLeft>Teste</TextLeft>
            </ContainerIcon>
            <ContainerIcon>
              <AntDesign name="heart" size={20} color="#468FAF" />
              <TextLeft>Teste</TextLeft>
            </ContainerIcon>
          </IconField> */}
        </ContainerColumn>
      </BookInfoContainer>

      <CommentContainer>
        <InputBox>
          <CommentTitle>{"     Comentários     "}</CommentTitle>
        </InputBox>

        <CommentFlatList
          nestedScrollEnabled
          data={comments}
          keyExtractor={(item) => item.idResenha}
          renderItem={({ item }) => (
            <BookComment
              imgSource={item.usuario.foto}
              userName={item.usuario.nome}
              date={item.dataComentario}
              content={item.descricao}
            />
          )}
        />
      </CommentContainer>

      <CommentButton>
        <ContainerRow>
          <Foundation name="pencil" size={20} color="#A1D9DF" />
          <InputText
            value={commentContent}
            onChangeText={(e) => setCommentContent(e)}
            onSubmitEditing={() => SubmitComment()}
            placeholder={"Adicione seu comentário!"}
          />
        </ContainerRow>
      </CommentButton>

      <LinkButton onPress={() => navigation.navigate("BottonTab")}>
        <LinkText>Cancelar</LinkText>
      </LinkButton>
    </ContainerGradientDark>
  );
};
