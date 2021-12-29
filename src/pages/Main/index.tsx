import ButtonMain from "../../components/ButtonMain";
import NavBar from "../../components/NavBar";
import { Container, MainContent } from "./styles";

const Main = () => {
  return (
    <Container>
      <NavBar />
      <MainContent>
        <ButtonMain text="caixa" link="/caixa" />
        <ButtonMain text="pedido" link="/pedidos" />
      </MainContent>
    </Container>
  );
};

export default Main;
