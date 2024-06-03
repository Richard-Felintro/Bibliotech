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

export const TextLight = styled(TextContent)`
  font-family: "MontserratAlternates_200ExtraLight";
`;

export const TextHighlight = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #fff;
  text-align: center;
  vertical-align: center;
`;

export const TextFieldBox = styled.View`
  height: fit-content;
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`;
