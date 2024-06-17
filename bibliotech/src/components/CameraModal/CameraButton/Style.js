import styled from "styled-components";
import { LinkButton } from "../../Link/Style";

export const CameraModalBtnView = styled.View`
  margin-top: 580px;
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CameraModalBtn = styled.TouchableOpacity`
  padding: 20px;
  margin: 20px;

  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #a9afb8;
  justify-content: center;
  align-items: center;
`;

// export const ViewButtons = styled.View``;

export const Seila = styled.View`
  background-color: #ffffff;
  width: 66px;
  height: 66px;
  border-radius: 33px;
`;

export const LinkButtomCamera = styled(LinkButton)`
  margin-top: 10px;
`;

export const LastPicture = styled.TouchableOpacity;
