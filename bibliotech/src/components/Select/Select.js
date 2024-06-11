import { InputBox, InputText, Select } from "./Style";

export const Input = ({ onChange, items, placeholder }) => {
  return (
    <InputBox>
      <Select
        placeholder={placeholder}
        onValueChange={(e) => onChange(e)}
        items={items}
        itemKey={items.idLivro}
      />
    </InputBox>
  );
};
