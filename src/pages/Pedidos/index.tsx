import { useContext, useState } from "react";
import EditForm from "../../components/EditForm";
import NavBar from "../../components/NavBar";
import TableData from "../../components/TableData";
import PedidosStore from "../../stores/PedidosStore";
import { Container, MainContent } from "./styles";

const Pedidos = () => {
  const allPedidos = useContext(PedidosStore);
  const { deletePedido, editPedido, newPedido, pedidos } = allPedidos;
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
