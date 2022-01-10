import { format } from "date-fns";
import { observer } from "mobx-react";
import { useContext, useEffect, useState } from "react";
import NavbarStore from "../../stores/NavbarStore";
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

  const NavbarButtons = useContext(NavbarStore);
  const { allButtons, toggleActiveButton } = NavbarButtons;

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

  return (
    <Container>
      <LeftSide>
        {allButtons.buttons.map((button, index) => (
          <NavBarButton
            onclick={() => toggleActiveButton(button.text)}
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
          {dateTime.minutes >= 0 && dateTime.minutes <= 9
            ? "0" + dateTime.minutes
            : dateTime.minutes}
        </Hora>
      </RightSide>
    </Container>
  );
};

export default observer(NavBar);
