import styled from "styled-components";
import { ContainerInput } from "../Container/Style";
import { LinkButton } from "../Link/Style";

export const RequestModalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
  height: 60%;
`;

export const ModalContent = styled.View`
  width: 100%;
  height: 55%;
  border-radius: 10px 10px 0 0;

  padding: 30px 0 15px 0;
  background-color: #013a63;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerInputNoMargin = styled(ContainerInput)`
  margin: 0;
`;

export const LinkButtonNoMargin = styled(LinkButton)`
  margin: 0;
`;
