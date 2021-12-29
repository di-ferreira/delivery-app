import React from "react";

import { Container, Texto } from "./styles";

interface iButtonMain {
  text: string;
  link: string;
}

const ButtonMain: React.FC<iButtonMain> = ({ text, link }) => {
  return (
    <Container to={link}>
      <Texto>{text}</Texto>
    </Container>
  );
};

export default ButtonMain;
