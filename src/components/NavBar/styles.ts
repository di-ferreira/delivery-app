import { colors } from "./../../colors";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  border-radius: 0.6rem;
  overflow: hidden;
  background-color: ${colors.componentColor};
  box-shadow: 0px 0px 10px 1px rgba(${colors.blackRgb}, 0.3);
  font-weight: 300;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0 1.5rem;
`;

export const Hora = styled.div`
  font-weight: 100;
  font-size: 1.9rem;
  margin-top: 0.1rem;
  font-weight: 300;
  color: ${colors.yellow};
`;

export const Dia = styled.div`
  font-size: 0.8rem;
  font-variant: small-caps;
`;

export const Data = styled.div`
  margin-top: 0.1rem;
  font-size: 0.8rem;
`;
