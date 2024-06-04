import {
  TextContent,
  TextFieldBox,
  TextFieldContent,
  TextHighlight,
  TextRight,
} from "./Style";

export const TextField = ({ label, content }) => {
  return (
    <TextFieldBox>
      <TextHighlight>{label} </TextHighlight><TextFieldContent>{content}</TextFieldContent>
    </TextFieldBox>
  );
};
