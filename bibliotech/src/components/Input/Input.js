import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { InputBox, InputText, PasswordInputBox } from "./Style";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export const Input = ({
  placeholder,
  onChange,
  lineCount = 1,
  maxLength = 99,
  editable = true,
}) => {
  return (
    <InputBox>
      <InputText
        placeholder={placeholder}
        onChangeText={onChange}
        multiline={lineCount > 1 ? true : false}
        maxLength={maxLength}
        numberOfLines={lineCount}
        editable={editable}
      />
    </InputBox>
  );
};

export const PasswordInput = ({ onChange, value }) => {
  // const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <PasswordInputBox>
      <InputText
        placeholder="SENHA"
        secureTextEntry={secureText}
        onChangeText={onChange}
        value={value}
      />
      <TouchableOpacity onPress={() => setSecureText(!secureText)}>
        <Ionicons
          name={secureText ? "eye-off" : "eye"}
          size={24}
          color="#A1D9DF"
        />
      </TouchableOpacity>
    </PasswordInputBox>
  );
};
