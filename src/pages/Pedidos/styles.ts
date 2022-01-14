import styled from "styled-components";

interface iRow {
  align?: string;
}

export const Container = styled.div`
  position: relative;
`;

export const MainContent = styled.div`
  display: flex;
  overflow-y: auto;
  width: 100%;
  padding: 0.5rem 0.1rem;
`;

export const TableTools = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;

export const RowForm = styled.div<iRow>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.align};
  width: 100%;
  height: 2.5rem;
`;
