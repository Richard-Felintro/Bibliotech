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
import moment from "moment/min/moment-with-locales";

export const BookComment = ({ userName, date, content, imgSource }) => {
  return (
    <CommentContainer>
      <CommentPfp source={{ uri: imgSource }} />
      <CommentColumn>
        <CommentName>{userName}</CommentName>
        <CommentDate>{moment(date).locale("pt-br").format("LL")}</CommentDate>
        <CommentContent>{content}</CommentContent>
      </CommentColumn>
    </CommentContainer>
  );
};
