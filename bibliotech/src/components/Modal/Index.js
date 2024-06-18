import { Modal } from "react-native";
import {
  ConfirmModal,
  ContainerTextModal,
  ModalContent,
  ViewRow,
} from "../Container/Container";

import { TitleSelecao } from "../Callendar/Style";
import { BookImageModal } from "../CardList/Style";
import { TextField } from "../Text/TextField";
import {
  ButtonLight,
  ButtonModal,
  ButtonOption,
  ButtonText,
  ButtonTextSmall,
} from "../Button/Style";
import api from "../../services/service";
import { ConfirmModalContainer } from "./Style";
import { LinkButton, LinkText } from "../Link/Style";

export const ModalConfirm = ({
  setShowModalConfirm,
  visible,
  bookData,
  userId,
  date,
  navigation,
  MargintText = 20,
  MarginTButtom = 45,
  MbImage = 10,
  ...rest
}) => {
  async function HandleContinue() {
    console.log(date);
    console.log(userId);
    console.log(bookData.idLivro);
    await api.post(`/EmprestimoLivro`, {
      situacao: "lendo",
      dataDevolucao: date,
      idUsuario: userId,
      idLivro: bookData.idLivro,
    }).then((response) => {
       api.put(`/Livro/AtualizarStatus?id=${bookData.idLivro}`,{
        situacaoLivro: "indisponivel"
      });
      navigation.replace("Main")
    })
  }

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <ConfirmModalContainer>
        <ModalContent>
          <TitleSelecao>CONFIRMAR EMPRÉSTIMO</TitleSelecao>

          <BookImageModal
            MbImage={MbImage}
            source={bookData ? { uri: bookData.capa } : null}
          />
          <ContainerTextModal MarginTButtom={MargintText}>
            <TextField
              label={"Título:"}
              content={bookData ? bookData.titulo : "Carregando..."}
            />
            <TextField
              label={"Autor:"}
              content={bookData ? bookData.autor : "Carregando..."}
            />
          </ContainerTextModal>

          <ButtonModal
            MarginTButtom={MarginTButtom}
            onPress={() => HandleContinue()}
          >
            <ButtonText>CONFIRMAR</ButtonText>
          </ButtonModal>

          <LinkButton onPress={() => setShowModalConfirm(false)}>
            <LinkText>Cancelar</LinkText>
          </LinkButton>
        </ModalContent>
      </ConfirmModalContainer>
    </Modal>
  );
};

export const ModalLogout = ({
  setShowLogout,
  visible,
  MargintText = 20,
  MarginTButtom = 38,
  MbImage = 10,
  navigation,
  onPressConfirm,
  onPressCancel,
  ...rest
}) => {
  const Navegacao = () => {
    navigation.replace("Login");
  };
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ConfirmModal>
        <ModalContent>
          <TitleSelecao>Tem certeza de que deseja sair?</TitleSelecao>
          <ViewRow>
            <ButtonOption
              MarginTButtom={MarginTButtom}
              onPress={onPressConfirm}
            >
              <ButtonTextSmall>SIM</ButtonTextSmall>
            </ButtonOption>

            <ButtonOption MarginTButtom={MarginTButtom} onPress={onPressCancel}>
              <ButtonTextSmall>NÃO</ButtonTextSmall>
            </ButtonOption>
          </ViewRow>
        </ModalContent>
      </ConfirmModal>
    </Modal>
  );
};
