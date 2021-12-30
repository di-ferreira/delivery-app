import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  background-color: gray;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 0 0.25rem;
`;

export const TableHeader = styled.thead``;

export const TableContent = styled.tbody``;

export const TableRow = styled.tr`
  background-color: brown;
  height: 2.5rem;
  td {
    text-align: center;
  }
`;

export const TableTools = styled.div``;
