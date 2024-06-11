import { Modal } from "react-native";
import {
  BtnSelected,
  BtnSelectedTitle,
  ContainerInputNoMargin,
  LinkButtonNoMargin,
  ModalContent,
  RequestModalContainer,
} from "./Style";
import { ContainerInput } from "../Container/Style";
import { Input } from "../Input/Input";
import { Title } from "../Title/Style";
import { ButtonDark, ButtonText } from "../Button/Style";
import { LinkButton, LinkText } from "../Link/Style";

export const RequestModal = ({ visible, showModal }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <RequestModalContainer>
        <ModalContent>
          <Title>SOLICITAR EMPRESTIMO</Title>
          
          <ContainerInputNoMargin>
            <Input
              placeholder={"SELECTIONAR GÊNERO"}
              onChange={(e) => setEmail(e)}
            />
            <Input placeholder={"SELECIONAR LIVRO"} onChange={(e) => setSenha(e)} />
          </ContainerInputNoMargin>

          <ButtonDark onPress={() => HandleLogin()}>
            <ButtonText>LOGIN</ButtonText>
          </ButtonDark>

          <LinkButtonNoMargin onPress={() => showModal(false)}>
            <LinkText>Cancelar</LinkText>
          </LinkButtonNoMargin>
        </ModalContent>
      </RequestModalContainer>
    </Modal>
  );
};