import React from "react";

import { ButtonClose, Container } from "./styles";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface iModal {
  children?: React.ReactNode;
  show?: boolean;
  close: () => void;
}

const Modal: React.FC<iModal> = ({ children, show, close }) => {
  return (
    <Container show={show}>
      <ButtonClose onClick={() => close()}>
        <FontAwesomeIcon icon={faTimes} size={"2x"} />
      </ButtonClose>
      {children}
    </Container>
  );
};

export default Modal;
