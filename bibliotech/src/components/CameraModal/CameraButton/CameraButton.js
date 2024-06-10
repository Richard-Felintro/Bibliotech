import styled from "styled-components";
import {
  CameraModalBtn,
  CameraModalBtnView,
  LinkButtomCamera,
  Seila,
  ViewButtons,
} from "./Style";
import { LinkText } from "../../Link/Style";

export const CameraButton = ({ onPress1, onPress2 }) => {
  return (
    <CameraModalBtnView>
      <ViewButtons>
        <CameraModalBtn onPress={onPress1}>
          <Seila />
        </CameraModalBtn>
        <LinkButtomCamera onPress={onPress2}>
          <LinkText>Cancelar</LinkText>
        </LinkButtomCamera>
      </ViewButtons>
    </CameraModalBtnView>
  );
};
