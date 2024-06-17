import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const GradientHeader = styled(LinearGradient).attrs({
  colors: ["#2C7DA0", "#01497C", "#012141"],
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 1,
    y: 1,
  },
})`
  width: 100%;
  height: 120px;
  flex-direction: row;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-content: space-between;
  padding: 20px 15px ;
`;

export const HeaderProfileView = styled.TouchableOpacity`
  gap: 10px;
  flex-direction: row;
`;

export const HeaderProfileImg = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-top: 20px;
`;

export const HeaderProfileNameIdView = styled.View`
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`;

export const HeaderProfileName = styled.Text`
  font-size: 14px;
  font-family: "MontserratAlternates_500Medium";
  height: auto;
  color: #ffffff;
`;
export const HeaderProfileId = styled.Text`
  font-size: 14px;
  font-family: "MontserratAlternates_400Regular";
  height: auto;
  color: #ffffff;
`;

export const BtnExit = styled.TouchableOpacity`
  margin-top: 30px;
  margin-right: 10px;
`;
