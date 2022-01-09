import styled from "styled-components";
import { colors } from "../../colors";

interface iModalStyle {
  show?: boolean;
}

export const Container = styled.div<iModalStyle>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  background-color: rgba(${colors.blackRgb}, 0.5);
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 1rem;
  top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.white};
  width: 2.5rem;
  height: 2.5rem;
  opacity: 1;
  border: none;
  border-radius: 50%;
  background-color: ${colors.dark};
  transition: all ease 0.5s;
  &:hover {
    transition: all ease 0.5s;
    opacity: 0.7;
  }
`;
