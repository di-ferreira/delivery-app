import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 23rem;
  height: 15rem;
  padding: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  background-color: ${colors.componentColor};
  box-shadow: 0px 0px 10px 1px rgba(${colors.blackRgb}, 0.3);
`;

export const Texto = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
`;
