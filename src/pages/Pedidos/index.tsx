import NavBar from "../../components/NavBar";
import TableData from "../../components/TableData";
import { Container, MainContent } from "./styles";

const Pedidos = () => {
  return (
    <Container>
      <NavBar />
      <MainContent>
        <TableData />
      </MainContent>
    </Container>
  );
};

export default Pedidos;
