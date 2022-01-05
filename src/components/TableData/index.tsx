import React from "react";
import Button from "../Button";
import { faPlus, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Container,
  Table,
  TableHeader,
  TableContent,
  TableTools,
  TableRow,
  TableColumn,
} from "./styles";

interface iTableData {
  columTitles: string[];
  resultData: any[];
}

const TableData: React.FC = () => {
  const [data, setData] = useState<iTableData>({
    resultData: [
      {
        codigo: "DF301221",
        data: "30/12/2021",
        nome: "Diego Ferreira",
        status: "Na Fila",
      },
      {
        codigo: "PV301221",
        data: "30/12/2021",
        nome: "Priscila Vieira",
        status: "Pronto",
      },
      {
        codigo: "AF301221",
        data: "30/12/2021",
        nome: "Aquiles Ferreira",
        status: "Em Transito",
      },
      {
        codigo: "CF301221",
        data: "30/12/2021",
        nome: "Celine Ferreira",
        status: "Entregue",
      },
      {
        codigo: "TS301221",
        data: "30/12/2021",
        nome: "Teste da Silva",
        status: "Cancelado",
      },
    ],
    columTitles: ["Cod.", "Data", "Nome", "Status", "Ações"],
  });

  return (
    <Container>
      <TableTools>
        <Button
          Icon={faPlus}
          Size={"lg"}
          Rounded={true}
          Type="success"
          Title="Adicionar Pedido"
          onclick={() => console.log("pedido adicionado")}
        />
      </TableTools>
      <Table>
        <TableHeader>
          <TableRow>
            {data?.columTitles.map((t: string, index) => (
              <th key={index}>{t}</th>
            ))}
          </TableRow>
        </TableHeader>

        <TableContent>
          {data.resultData.map((d, index) => (
            <TableRow key={index}>
              <TableColumn>{d.codigo}</TableColumn>
              <TableColumn>{d.data}</TableColumn>
              <TableColumn>{d.nome}</TableColumn>
              <TableColumn>{d.status}</TableColumn>
              <TableColumn action={true}>
                <Button
                  Text="Editar"
                  Icon={faEdit}
                  onclick={() => {}}
                  Type="warn"
                />
                <Button
                  Text="Cancelar"
                  Icon={faTimes}
                  onclick={() => {}}
                  Type="danger"
                />
              </TableColumn>
            </TableRow>
          ))}
        </TableContent>
      </Table>
    </Container>
  );
};

export default TableData;
