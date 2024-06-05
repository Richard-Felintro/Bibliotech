import styled, { css } from "styled-components";

export const BtnSelectedView = styled.View`
  width: 103%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const BtnSelected = styled.TouchableOpacity`
  width: 180px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 200px;

  ${(props) =>
    props.clickButton
      ? css`
          background-color: #2c7da0;
        `
      : css`
          background-color: #013163;
        `}
`;

export const BtnSelectedTitle = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_600SemiBold";
  text-transform: uppercase;
  color: #ffffff;
`;
