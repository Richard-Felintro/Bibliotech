import { BtnSelected, BtnSelectedTitle } from "./Style";

export const BtnListComponent = ({
  buttonText,
  onPress,
  clickButton = false,
}) => {
  return (
    <BtnSelected onPress={onPress} clickButton={clickButton}>
      <BtnSelectedTitle>{buttonText}</BtnSelectedTitle>
    </BtnSelected>
  );
};
