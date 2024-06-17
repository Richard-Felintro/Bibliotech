import { Modal } from "react-native";
import {
  ModalBookBtn,
  ModalBookBtnTitle,
  ModalBookImg,
  ModalBookInfoText,
  ModalBookInfoTitle,
  ModalBookInfoView,
  ModalBookView,
  ModalTransparent,
} from "./Style";
import { LinkButton, LinkText } from "../Link/Style";

export const BookModal = ({
  navigation,
  visible,
  setShowBookModal,
  bookData,
  onPress,
  onPressCancel,
  ...rest
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true} {...rest}>
      <ModalTransparent>
        <ModalBookView>
          <ModalBookImg source={require("../../assets/bookImage.jpg")} />
          <ModalBookInfoView>
            <ModalBookInfoTitle>
              Titulo: <ModalBookInfoText>{bookData.titulo}</ModalBookInfoText>
            </ModalBookInfoTitle>
            <ModalBookInfoTitle>
              Autor: <ModalBookInfoText>{bookData.autor}</ModalBookInfoText>
            </ModalBookInfoTitle>
            <ModalBookInfoTitle>
              Editora: <ModalBookInfoText>{bookData.editora}</ModalBookInfoText>
            </ModalBookInfoTitle>
            <ModalBookInfoTitle>
              Ano: <ModalBookInfoText>{bookData.ano}</ModalBookInfoText>
            </ModalBookInfoTitle>
            <ModalBookInfoTitle>
              ISBN: <ModalBookInfoText>{bookData.isbn}</ModalBookInfoText>
            </ModalBookInfoTitle>

            <ModalBookBtn onPress={onPress}>
              <ModalBookBtnTitle>Ver Resenhas</ModalBookBtnTitle>
            </ModalBookBtn>

            <LinkButton onPress={onPressCancel}>
              <LinkText>Voltar</LinkText>
            </LinkButton>


          </ModalBookInfoView>
        </ModalBookView>
      </ModalTransparent>
    </Modal>
  );
};
