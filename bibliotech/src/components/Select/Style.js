import styled from "styled-components";
import RNPickerSelect from 'react-native-picker-select';

export const Select = styled(RNPickerSelect).attrs({
  placeholderTextColor: "#c8c8c8",
})`
  width: 100%;
  padding: 10px;
  font-family: "MontserratAlternates_500Medium";
  font-size: 16px;
  color: #ffff;
  text-align: center;
  background-color: transparent;
`;
