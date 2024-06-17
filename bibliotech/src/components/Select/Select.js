import { StyleSheet } from "react-native";
import { InputBox, Select } from "./Style";
import RNPickerSelect from "react-native-picker-select";

export const Dropdown = ({ onChange, items, placeholder }) => {
  return (
    <InputBox>
      <RNPickerSelect
        style={{ ...dropdownStyles }}
        onValueChange={onChange}
        placeholder={placeholder}
        items={items}
      />
    </InputBox>
  );
};

