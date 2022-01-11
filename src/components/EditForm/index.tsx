import React from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonClose, Container } from "./styles";

interface iEditForm {
  children?: React.ReactNode;
  show?: boolean;
  close: () => void;
}

const EditForm: React.FC<iEditForm> = ({ children, show, close }) => {
  return (
    <Container show={show}>
      <ButtonClose onClick={() => close()}>
        <FontAwesomeIcon icon={faTimes} size={"2x"} />
      </ButtonClose>
      {children}
    </Container>
  );
};

export default EditForm;
