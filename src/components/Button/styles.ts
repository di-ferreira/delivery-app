import styled from "styled-components";
import { colors } from "../../colors";

export type iButtonType = "default" | "success" | "warn" | "danger";

interface isButton {
  typeButton?: iButtonType;
  rounded?: boolean;
}

export const Container = styled.button<isButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.white};
  border: none;
  padding: 0.35rem 0.4rem;
  border-radius: ${(props) => (props.rounded ? "50%" : 0)};
  background-color: ${(props) =>
    props.typeButton === "danger"
      ? colors.red
      : props.typeButton === "warn"
      ? colors.yellow
      : props.typeButton === "success"
      ? colors.green
      : colors.gray};
`;
