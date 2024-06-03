import { Image } from "react-native";
import {
  ContainerAlternate,
  ContainerColumn,
} from "../../components/Container/Style";
import { InputBox } from "../../components/Input/Style";
import { BookThumbnail } from "../../components/Image/Style";
import { TextField } from "../../components/Text/TextField";
import { BookInfoContainer, CommentTitle, IconField } from "./Style";
import { BookComment } from "../../components/Comment/Comment";
import { FavoriteCount, RatingCount } from "../../components/Icon/Icon";
import { ContainerIcon } from "../../components/Icon/Style";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { TextContent } from "../../components/Text/Style";

export const BookInfoScreen = () => {
  return (
    <ContainerAlternate>
      <BookInfoContainer>
        <BookThumbnail
          source={require("../../assets/LOGO.png")}
        ></BookThumbnail>
        <ContainerColumn>
          <TextField label={"Título:"} content={"Felipe Neto, A trajetória"} />
          <TextField label={"Gênero:"} content={"Biografia"} />
          <TextField label={"Autor:"} content={"Nelipe Feto"} />
          <TextField label={"Editor:"} content={"Coquetel"} />
          <TextField label={"ISBN:"} content={"1254759812357"} />
          <IconField>
            <ContainerIcon>
              <Entypo name="star" size={20} color="#468FAF" />
              <TextContent>5.0</TextContent>
            </ContainerIcon>
            <ContainerIcon>
              <AntDesign name="heart" size={20} color="#468FAF" />
              <TextContent>5.0</TextContent>
            </ContainerIcon>
          </IconField>
        </ContainerColumn>
      </BookInfoContainer>

      <ContainerColumn>
        <InputBox>
          <CommentTitle>{"     Resenhas     "}</CommentTitle>
        </InputBox>
        <BookComment />
      </ContainerColumn>
    </ContainerAlternate>
  );
};
