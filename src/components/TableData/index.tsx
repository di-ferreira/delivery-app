import React from "react";
import { iTableData } from "../../@types";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import Pronto from "../../assets/images/pronto.svg";
import {
  Container,
  Table,
  TableHeader,
  TableContent,
  TableRow,
  TableColumn,
} from "./styles";

const TableData: React.FC<iTableData> = ({
  columTitles,
  resultData,
  actionColumn,
  addAction,
  deleteAction,
  editAction,
}) => {
  return (
    <Container>
      <Table>
        <TableHeader>
          <TableRow>
            {columTitles.map((t: string, index) => (
              <th key={index}>{t}</th>
            ))}
          </TableRow>
        </TableHeader>

        <TableContent>
          {resultData.map((p, index) => (
            <TableRow key={index} onClick={() => editAction(p)} hover={true}>
              <TableColumn>{p.codigo}</TableColumn>
              <TableColumn>{p.data}</TableColumn>
              <TableColumn>{p.nome}</TableColumn>
              <TableColumn>
                {p.status === "pronto" ? (
                  <img src={Pronto} alt="Pronto" title="Pronto" />
                ) : null}
              </TableColumn>
              {actionColumn && (
                <TableColumn action={true}>
                  <Button
                    Text="Editar"
                    Icon={faEdit}
                    onclick={() => editAction(p)}
                    Type="warn"
                  />
                  <Button
                    Text="Cancelar"
                    Icon={faTimes}
                    onclick={() => deleteAction(p)}
                    Type="danger"
                  />
                </TableColumn>
              )}
            </TableRow>
          ))}
        </TableContent>
      </Table>
    </Container>
  );
};

export default TableData;
