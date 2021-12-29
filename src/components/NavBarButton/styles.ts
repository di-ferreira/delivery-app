import { colors } from "./../../colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface iStyle {
  active: boolean;
}

export const Container = styled.div<iStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 1.5rem;
  height: 100%;
  margin-right: -0.15rem;
  background-color: ${(props) => (props.active ? colors.red : "")};
  border: solid 0.15rem
    ${(props) => (props.active ? colors.componentColor : "transparent")};
  transition: all ease 0.5s;

  &:hover {
    transition: all ease 0.5s;
    background-color: ${colors.red};
    border-color: ${colors.componentColor};
  }
`;

export const Text = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 300;
  text-decoration: none;
  color: ${colors.white};
  text-transform: capitalize;
  font-size: 1.2rem;
`;
