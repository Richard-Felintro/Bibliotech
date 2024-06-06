import { InputBox, InputText } from "./Style";

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
