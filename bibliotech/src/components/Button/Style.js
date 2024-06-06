import styled from "styled-components";

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: "MontserratAlternates_700Bold";
  color: #FFF;
  text-align: center;
  vertical-align: center;
`;

export const ButtonTextSmall = styled(ButtonText)`
    font-size: 15px;
`
export const ButtonDark = styled.TouchableOpacity`
  width: 80%;
  height: 56px;
  background-color: #012141;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonLight = styled.TouchableOpacity`
  width: 40%;
  height: 56px;
  background-color: #2c7da0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  
`;

export const ButtonOption = styled(ButtonLight)`
    width:50%
`

export const ButtonModal = styled(ButtonLight)`
    width:80%;
    margin-top: ${props => `${props.MarginTButtom}px`};
`

export const ButtonDarkSmall = styled.TouchableOpacity`
  width: 45%;
  height: 56px;
  background-color: #001b21;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonLightSmall = styled.TouchableOpacity`
  width: 45%;
  height: 56px;
  background-color: #2c7da0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
