import styled from "styled-components";
import { colors } from "../../colors";

interface iColumn {
  action?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 0 0.25rem;
`;

export const TableHeader = styled.thead`
  th {
    text-align: center;
    font-size: 1rem;
    font-variant: small-caps;
  }
`;

export const TableContent = styled.tbody``;

export const TableColumn = styled.td<iColumn>`
  ${(props) => (props.action ? "display:flex;" : "display: table-cell;")}
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  height: 100%;
  text-align: center;
  font-size: 0.9rem;
`;

export const TableRow = styled.tr`
  height: 2.5rem;
  background-color: ${colors.componentColor};
  box-shadow: 0px 1px 1px 1px rgba(${colors.blackRgb}, 0.3);
`;

export const TableTools = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;
