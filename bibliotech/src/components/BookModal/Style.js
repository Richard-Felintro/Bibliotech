import styled from "styled-components";

export const ModalTransparent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalBookView = styled.View`
  margin: 43px 12px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 90%;
  height: 85%;
  background-color: #013a63;
  border-radius: 35px;
`;

export const ModalBookImg = styled.Image`
  width: 173px;
  height: 247px;
  border-radius: 8px;
`;

export const ModalBookInfoView = styled.View`
  width: 66%;
  height: auto;
  justify-content: center;
  justify-content: center;
  gap: 10px;
`;

export const ModalBookInfoTitle = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_700Bold";
  text-align: justify;
  color: #ffffff;
`;

export const ModalBookInfoText = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_500Medium";
  text-align: justify;
  color: #ffffff;
`;

export const ModalBookBtn = styled.TouchableOpacity`
  width: 203px;
  height: 62px;
  background-color: #2c7da0;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 12px;
  margin-top: 20px;
`;

export const ModalBookBtnTitle = styled.Text`
  font-family: "MontserratAlternates_700Bold";
  font-size: 20px;
  color: #ffffff;
  text-align: center;
`;
