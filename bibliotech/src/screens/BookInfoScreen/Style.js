import styled from "styled-components";
import {
  ContainerColumn,
  ContainerRow,
} from "../../components/Container/Style";
import { Title } from "../../components/Title/Style";
import { FlatList, Image } from "react-native";

export const BookInfoContainer = styled(ContainerRow)`
  margin-top: 25px;
  height: 30%;
`;

export const CommentTitle = styled(Title)`
  margin-bottom: 10px;
`;

export const IconField = styled(ContainerRow)`
  justify-content: space-between;
  width: 60%;
`;

export const CommentContainer = styled(ContainerColumn)`
  justify-content: start;
  max-height: 50%;
`;

export const CommentFlatList = styled(FlatList)`
  align-self: flex-start;
  width: 100%;
  height: 100%;
  flex-grow: 0;
  margin-top: 20px;
`;

export const CommentButton = styled.View`
  margin: 20px;
  padding-left: 15px;
  flex-direction: row;
  border-bottom-color: #a1d9df;
  border-bottom-width: 1px;
  width: 80%;
  height: fit-content;
  justify-self: flex-end;
`;
