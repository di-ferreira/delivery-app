import styled from "styled-components";
import { colors } from "../../colors";

interface iModalStyle {
  show?: boolean;
}

export const Container = styled.div<iModalStyle>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: relative;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 0 0 0.5rem;
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${colors.componentColor};
  box-shadow: 0px 1px 1px 1px rgba(${colors.blackRgb}, 0.3);
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(${colors.blackRgb}, 0.7);
  opacity: 1;
  border: none;
  background-color: transparent;
  transition: all ease 0.5s;
  &:hover {
    transition: all ease 0.5s;
    opacity: 0.7;
  }
`;
