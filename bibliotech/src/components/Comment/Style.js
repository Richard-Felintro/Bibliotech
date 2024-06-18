import styled from "styled-components";
import { TextContent, TextHighlight, TextLight } from "../Text/Style";
import { ContainerColumn, ContainerRow } from "../Container/Style";

export const CommentContainer = styled(ContainerRow)`
  flex-grow: 1;
  height: 150px;
  margin: 5px;
`;

export const CommentName = styled(TextHighlight)`
  width: 90%;
  text-align: left;
`;

export const CommentDate = styled(TextLight)`
  font-size: 12px;
  margin-bottom: 5px;
  text-align: left;
`;

export const CommentContent = styled(TextContent)`
  font-size: 14px;
  height: 75px;
  text-align: left;
`;

export const CommentColumn = styled(ContainerColumn)`
  width: 85%;
`;

export const CommentRow = styled(ContainerRow)`
  justify-content: center;
`;
