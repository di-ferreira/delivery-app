import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import EditForm from "../../components/EditForm";
import NavBar from "../../components/NavBar";
import TableData from "../../components/TableData";
import PedidosStore from "../../stores/PedidosStore";
import { Container, MainContent, TableTools } from "./styles";

const Pedidos = () => {
  const allPedidos = useContext(PedidosStore);
  const { deletePedido, newPedido, pedidos } = allPedidos;
  const titleColumns: string[] = ["Cód.", "Data", "Nome", "Status", "Ações"];
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const closeForm = () => {
    setShowEdit(false);
  };

  const editForm = () => {
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </EditForm>
      </MainContent>
    </Container>
  );
};

export default Pedidos;
