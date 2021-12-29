import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Caixa from "../pages/Caixa/index";
import Pedidos from "../pages/Pedidos/index";
import Cardapio from "../pages/Cardapio/index";
import ChatBot from "../pages/ChatBot/index";
import Configuracoes from "../pages/Configuracoes/index";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/caixa" component={Caixa} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/cardapio" component={Cardapio} />
        <Route path="/chat" component={ChatBot} />
        <Route path="/config" component={Configuracoes} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
