import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

import { Container, iButtonType } from "./styles";

interface iButton {
  Text?: string;
  Title?: string;
  Icon?: IconProp;
  Size?: SizeProp;
  Rounded?: boolean;
  Type?: iButtonType;
  onclick: () => void;
}

const Button: React.FC<iButton> = ({
  Type,
  Icon,
  Text,
  Size,
  Rounded,
  Title,
  onclick,
}) => {
  return (
    <Container
      rounded={Rounded}
      typeButton={Type}
      title={Title}
      onClick={() => onclick()}
    >
      {Icon && <FontAwesomeIcon icon={Icon} size={Size} />}
      {Text && <span>{Text}</span>}
    </Container>
  );
};

export default Button;
