import { Container } from "./styles";

interface iContainerMain {
  children: React.ReactNode;
}

const ContainerMain = ({ children }: iContainerMain) => {
  return <Container>{children}</Container>;
};

export default ContainerMain;
