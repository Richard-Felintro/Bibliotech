import styled from "styled-components";

export const ContentIcon = styled.View.attrs({
  focus: true,
})`
  padding: 10px 12px ;
  background-color: ${(props) => `${props.tapBarActiveBackgroundColor}`};

  gap: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
