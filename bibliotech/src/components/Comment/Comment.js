import { ContainerColumn, ContainerRow } from "../Container/Style";
import { BookThumbnail, CommentPfp } from "../Image/Style";
import { TextContent, TextHighlight, TextLight } from "../Text/Style";
import {
  CommentColumn,
  CommentContainer,
  CommentContent,
  CommentDate,
  CommentName,
} from "./Style";

export const BookComment = () => {
  return (
    <CommentContainer>
      <CommentPfp source={require("../../assets/murilo.png")} />
      <CommentColumn>
        <CommentName>Murilo</CommentName>
        <CommentDate>24 de Maio</CommentDate>
        <CommentContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CommentContent>
      </CommentColumn>
    </CommentContainer>
  );
};
