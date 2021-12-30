import { Container, Text } from "./styles";

interface iNavBarButton {
  text: string;
  active?: boolean;
  link: string;
  onclick: () => void;
}

const NavBarButton = ({
  text,
  active = false,
  link,
  onclick,
}: iNavBarButton) => {
  return (
    <Container active={active} onClick={onclick}>
      <Text to={link}>{text}</Text>
    </Container>
  );
};

export default NavBarButton;
