import React from "react";

import {
  Container,
  Table,
  TableHeader,
  TableContent,
  TableTools,
  TableRow,
} from "./styles";

const TableData: React.FC = () => {
  return (
    <Container>
      <TableTools>
        <button>Novo Pedido</button>
      </TableTools>
      <Table>
        <TableHeader>
          <TableRow>
            <th>Cod.</th>
            <th>Data</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Ações</th>
          </TableRow>
        </TableHeader>
        <TableContent>
          <TableRow>
            <td>DF301221</td>
            <td>30/12/2021</td>
            <td>Diego Ferreira</td>
            <td>Na Fila</td>
            <td>
              <button>Editar</button>
              <button>Cancelar</button>
            </td>
          </TableRow>
          <TableRow>
            <td>PV301221</td>
            <td>30/12/2021</td>
            <td>Priscila Vieira</td>
            <td>Pronto</td>
            <td>
              <button>Editar</button>
              <button>Cancelar</button>
            </td>
          </TableRow>
          <TableRow>
            <td>AF301221</td>
            <td>30/12/2021</td>
            <td>Aquiles Ferreira</td>
            <td>Em Transito</td>
            <td>
              <button>Editar</button>
              <button>Cancelar</button>
            </td>
          </TableRow>
          <TableRow>
            <td>CF301221</td>
            <td>30/12/2021</td>
            <td>Celine Ferreira</td>
            <td>Entregue</td>
            <td>
              <button>Editar</button>
              <button>Cancelar</button>
            </td>
          </TableRow>
        </TableContent>
      </Table>
    </Container>
  );
};

export default TableData;
