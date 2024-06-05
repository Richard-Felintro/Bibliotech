import styled from "styled-components";

export const TextContent = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_400Regular";
  color: #fff;
  text-align: center;
  vertical-align: center;
  width: 90%;
  overflow-wrap: break-word;
`;

export const TextLeft = styled(TextContent)`
  text-align: left;
  margin: 5px;
`;

export const TextMedium = styled.Text`
  width: 100%;
  padding: 10px;
  font-family: "MontserratAlternates_500Medium";
  font-size: 16px;
  color: #ffff;
  text-align: center;
`;

export const TextLight = styled(TextContent)`
  font-family: "MontserratAlternates_200ExtraLight";
`;

export const TextHighlight = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #fff;
  width: fit-content;
  text-align: left;
  vertical-align: center;
`;

export const TextFieldContent = styled(TextHighlight)`
  font-family: "MontserratAlternates_400Regular";
  text-align: left;
  width: 80%;
`;

export const TextFieldBox = styled.View`
  height: fit-content;
  width: 70%;
  flex-direction: row;
  margin: 1px;
`;
