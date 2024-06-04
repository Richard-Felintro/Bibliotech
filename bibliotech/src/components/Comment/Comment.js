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

export const BookComment = ({ userName, date, content }) => {
  return (
    <CommentContainer>
      <CommentPfp source={require("../../assets/murilo.png")} />
      <CommentColumn>
        <CommentName>{userName}</CommentName>
        <CommentDate>{date}</CommentDate>
        <CommentContent>{content}</CommentContent>
      </CommentColumn>
    </CommentContainer>
  );
};
