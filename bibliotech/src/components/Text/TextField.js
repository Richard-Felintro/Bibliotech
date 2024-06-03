import {
  TextContent,
  TextFieldBox,
  TextHighlight,
  TextRight,
} from "./Style";

export const TextField = ({ label, content }) => {
  return (
    <TextFieldBox>
      <TextHighlight>{label}</TextHighlight>
      <TextContent>{content}</TextContent>
    </TextFieldBox>
  );
};
