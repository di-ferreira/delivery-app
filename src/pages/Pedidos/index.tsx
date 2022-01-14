import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { iPedido } from "../../@types";
import Button from "../../components/Button";
import EditForm from "../../components/EditForm";
import NavBar from "../../components/NavBar";
import TableData from "../../components/TableData";
import PedidosStore from "../../stores/PedidosStore";
import { Container, MainContent, TableTools, RowForm } from "./styles";

const Pedidos = () => {
  const allPedidos = useContext(PedidosStore);
  const { deletePedido, newPedido, pedidos } = allPedidos;
  const titleColumns: string[] = ["Cód.", "Data", "Nome", "Status", "Ações"];
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [pedido, setPedido] = useState<iPedido>({} as iPedido);

  const closeForm = () => {
    setShowEdit(false);
  };

  const editForm = (p: iPedido) => {
    setPedido(p);
    setShowEdit(true);
  };

  return (
    <Container>
      <NavBar />
      <TableTools>
        <Button
          Icon={faPlus}
          Size={"lg"}
          Text="Novo"
          Type="success"
          Title="Adicionar Pedido"
          onclick={() => console.log("pedido add")}
        />
      </TableTools>
      <MainContent>
        <TableData
          columTitles={titleColumns}
          resultData={pedidos}
          actionColumn={true}
          addAction={newPedido}
          deleteAction={deletePedido}
          editAction={editForm}
        />
        <EditForm close={closeForm} show={showEdit}>
          <RowForm align="center">
            <h1>{pedido.codigo}</h1>
          </RowForm>
          <RowForm>
            Cliente:
            <strong>{pedido.nome}</strong>
          </RowForm>
          <RowForm>
            Cliente:
            <strong>{pedido.nome}</strong>
          </RowForm>
          <RowForm>
            Cliente:
            <strong>{pedido.nome}</strong>
          </RowForm>
          <RowForm>
            Cliente:
            <strong>{pedido.nome}</strong>
          </RowForm>
        </EditForm>
      </MainContent>
    </Container>
  );
};

export default Pedidos;
