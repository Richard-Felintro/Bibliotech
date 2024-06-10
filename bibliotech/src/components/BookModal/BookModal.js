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
              Titulo:{" "}
              <ModalBookInfoText>
                Felipe Neto, A trajetória de um dos maiores youtubers do Brasil
              </ModalBookInfoText>
            </ModalBookInfoTitle>
            <ModalBookInfoTitle>
              Autor: <ModalBookInfoText>Felipe Neto</ModalBookInfoText>
            </ModalBookInfoTitle>
            <ModalBookInfoTitle>
              Editora: <ModalBookInfoText>Coquetel</ModalBookInfoText>
            </ModalBookInfoTitle>
            <ModalBookInfoTitle>
              Ano: <ModalBookInfoText>2017</ModalBookInfoText>
            </ModalBookInfoTitle>
            <ModalBookInfoTitle>
              ISBN: <ModalBookInfoText>8579027667</ModalBookInfoText>
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
