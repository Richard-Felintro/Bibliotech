import { InputBox, InputText } from "./Style";

export const Input = ({ placeholder }) => {
  return (
    <InputBox>
      <InputText placeholder={placeholder} />
    </InputBox>
  );
};
