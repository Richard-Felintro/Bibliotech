import { Modal } from "react-native";
import {
  ConfirmModal,
  ContainerTextModal,
  ModalContent,
  ViewRow,
} from "../Container/Container";
import { TitleSelecao } from "../Callendar/Style";
import { BookThumbnail } from "../Image/Style";
import { BookImageModal } from "../CardList/Style";
import { TextField } from "../Text/TextField";
import {
  ButtonLight,
  ButtonModal,
  ButtonOption,
  ButtonText,
  ButtonTextSmall,
} from "../Button/Style";

export const ModalConfirm = ({
  setShowModalConfirm,
  visible,
  MargintText = 20,
  MarginTButtom = 45,
  MbImage = 10,
  ...rest
}) => {
  return (
    <Modal
      {...rest}
      visible={visible}
      // transparent={true}
      animationType="fade"
    >
      <ConfirmModal>
        <ModalContent>
          <TitleSelecao>CONFIRMAR EMPRÉSTIMO</TitleSelecao>

          <BookImageModal
            MbImage={MbImage}
            source={require("../../assets/bookImage.jpg")}
          />
          <ContainerTextModal MarginTButtom={MargintText}>
            <TextField label={"Título:"} content={"Gravity Falls"} />
            <TextField label={"Autor:"} content={"Mickey Mouse"} />
          </ContainerTextModal>

          <ButtonModal
            MarginTButtom={MarginTButtom}
            onPress={() => setShowModalConfirm(false)}
          >
            <ButtonText>CONFIRMAR</ButtonText>
          </ButtonModal>
        </ModalContent>
      </ConfirmModal>
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

            <ButtonOption
              MarginTButtom={MarginTButtom}
              onPress={() => onPressCancel}
            >
              <ButtonTextSmall>NÃO</ButtonTextSmall>
            </ButtonOption>
          </ViewRow>
        </ModalContent>
      </ConfirmModal>
    </Modal>
  );
};
