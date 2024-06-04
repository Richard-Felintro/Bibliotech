import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const GradientHeader = styled(LinearGradient).attrs({
  colors: ["#2C7DA0", "#01497C", "#012141"],
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 1,
    y: 1,
  },

  focus: true,
})`
  border-radius: 18px;
  padding: 9px 12px;
`;
