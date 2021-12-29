import React from "react";

import { Container } from "./styles";

interface iButtonMain {
  text: string;
}

const ButtonMain: React.FC<iButtonMain> = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default ButtonMain;
