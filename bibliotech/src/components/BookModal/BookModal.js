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
import { useEffect, useState } from "react";
import api from "../../services/service";

export const BookModal = ({
  navigation,
  visible,
  setShowBookModal,
  bookData,
  bookIsbn,
  data,
  ...rest
}) => {

  async function HandleContinue() {
    navigation.replace("BookInfo", {bookData : bookData});
  }

  return (
    <Modal visible={visible} animationType="fade" transparent={true} {...rest}>
      <ModalTransparent>
        <ModalBookView>
          {/*<ModalBookImg source={source} />*/}
          <ModalBookImg source={{ uri: bookData.capa }} />
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

            <ModalBookBtn onPress={() => HandleContinue()}>
              <ModalBookBtnTitle>Ver Resenhas</ModalBookBtnTitle>
            </ModalBookBtn>

            <LinkButton onPress={() => setShowBookModal(false)}>
              <LinkText>Voltar</LinkText>
            </LinkButton>
          </ModalBookInfoView>
        </ModalBookView>
      </ModalTransparent>
    </Modal>
  );
};
