import styled from "styled-components";

export const InputBox = styled.View`
  align-items: center;
  justify-content: center;
  border-bottom-color: #a1d9df;
  border-bottom-width: 1px;
  width: 80%;
  min-width: 50vw;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: "#ffff",
})`
  width: 100%;
  padding: 10px;
  font-family: "MontserratAlternates_500Medium";
  font-size: 16px;
  color: #ffff;
  text-align: center;
`;

export const InputCodeBox = styled.View`
  align-items: center;
  justify-content: center;
  border-bottom-color: #a1d9df;
  border-bottom-width: 1px;
  width: 20%;
  height: fit-content;
`;

export const InputCode = styled.TextInput.attrs({
  placeholderTextColor: "#bbb",
})`
  width: 100%;
  padding: 10px;
  font-family: "MontserratAlternates_200ExtraLight";
  font-size: 40px;
  color: #ffff;
  text-align: center;
  vertical-align: center;
`;

export const ViewInput = styled.View`
  align-items: center;
  justify-content: center;
  border-bottom-color: #a1d9df;
  border-bottom-width: 1px;
  width: 70%;
  margin-bottom: 48px;
`;

export const Input = styled.TextInput.attrs({ placeholderTextColor: "#ffff" })`
  width: 70%;
  padding: 10px;
  font-family: "MontserratAlternates_500Medium";
  font-size: 16px;
  color: #ffff;
  text-align: center;
`;
