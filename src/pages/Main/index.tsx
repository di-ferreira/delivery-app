import ButtonMain from "../../components/ButtonMain";
import ContainerMain from "../../components/Container";
import NavBar from "../../components/NavBar";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <NavBar />
      <ContainerMain>
        <ButtonMain text="pedido" />
      </ContainerMain>
    </Container>
  );
};

export default Main;
