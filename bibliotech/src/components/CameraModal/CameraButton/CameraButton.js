import styled from "styled-components";
import { CameraModalBtn, CameraModalBtnView, Seila } from "./Style";

export const CameraButton = ({ onPress }) => {
  return (
    <CameraModalBtnView>
      <CameraModalBtn onPress={onPress}>
        <Seila />
      </CameraModalBtn>
    </CameraModalBtnView>
  );
};
