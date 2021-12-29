import { format } from "date-fns";
import { useEffect, useState } from "react";
import NavBarButton from "../NavBarButton";
import { Container, LeftSide, RightSide, Hora, Dia, Data } from "./styles";

const NavBar = () => {
  const date = new Date();
  const weekDay = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    day: date.getDay(),
    fullDate: date.getFullYear(),
  });
  const [buttons, setButtons] = useState([
    { text: "home", active: true, link: "/" },
    { text: "caixa", active: false, link: "/caixa" },
    { text: "pedidos", active: false, link: "/pedidos" },
    { text: "cardápio", active: false, link: "/cardapio" },
    { text: "whatsapp", active: false, link: "/chat" },
    { text: "configurações", active: false, link: "/config" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        day: date.getDay(),
        fullDate: date.getFullYear(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activedButton = (text: string) => {
    let newButtons = buttons.map((b) => {
      if (b.text === text) {
        b.active = true;
      } else {
        b.active = false;
      }
      return b;
    });
    setButtons(newButtons);
  };
  return (
    <Container>
      <LeftSide>
        {buttons.map((button, index) => (
          <NavBarButton
            onclick={() => activedButton(button.text)}
            key={index}
            text={button.text}
            active={button.active}
            link={button.link}
          />
        ))}
      </LeftSide>
      <RightSide>
        <Dia>{weekDay[dateTime.day]}</Dia>
        <Data>{format(date, "dd/MM/yyyy")}</Data>
        <Hora>
          {dateTime.hours}:
          {dateTime.minutes > 0 && dateTime.minutes < 9
            ? "0" + dateTime.minutes
            : dateTime.minutes}
        </Hora>
      </RightSide>
    </Container>
  );
};

export default NavBar;
