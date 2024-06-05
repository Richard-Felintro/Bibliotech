import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ContainerIcon } from "./Style";
import { TextContent } from "../Text/Style";

export const FavoriteCount = ({ favCount }) => {
  <ContainerIcon>
    <AntDesign name="heart" size={20} color="#468FAF" />
    <TextContent>{favCount}</TextContent>
  </ContainerIcon>;
};

export const RatingCount = ({ rating }) => {
  <ContainerIcon>
    <Entypo name="star" size={20} color="#468FAF" />
    <TextContent>{rating}</TextContent>
  </ContainerIcon>;
};
