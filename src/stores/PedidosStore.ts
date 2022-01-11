import { createContext } from "react";
import { action, makeObservable, observable, computed } from "mobx";
import { iPedido } from "../@types";

class PedidosStore {
  pedidos: iPedido[] = [
    {
      codigo: "DF301221",
      data: "30-12-2021",
      nome: "Diego Ferreira",
      status: "na fila",
      obs: "",
    },
    {
      codigo: "PV301221",
      data: "30/12/2021",
      nome: "Priscila Vieira",
      status: "pronto",
      obs: "",
    },
    {
      codigo: "AF301221",
      data: "30/12/2021",
      nome: "Aquiles Ferreira",
      status: "em transito",
      obs: "",
    },
    {
      codigo: "CF301221",
      data: "30/12/2021",
      nome: "Celine Ferreira",
      status: "entregue",
      obs: "",
    },
    {
      codigo: "TS301221",
      data: "30/12/2021",
      nome: "Teste da Silva",
      status: "cancelado",
      obs: "Cliente desistiu por causa da demora",
    },
  ];

  constructor() {
    makeObservable(this, {
      pedidos: observable,
      newPedido: action,
      editPedido: action,
      deletePedido: action,
      Pedidos: computed,
    });
  }

  newPedido = (pedido: iPedido) => {
    this.pedidos.push(pedido);
  };

  editPedido = (pedido: iPedido) => {
    this.pedidos = this.pedidos.map((p) => {
      if (p.codigo === pedido.codigo) {
        return (p = pedido);
      }
      return p;
    });
  };

  deletePedido = (pedido: iPedido) => {
    this.pedidos = this.pedidos.map((p) => {
      if (p.codigo === pedido.codigo) {
        p.status = "cancelado";
        return p;
      }
      return p;
    });
  };

  get Pedidos() {
    return {
      pedidos: this.pedidos,
      totalPedidos: this.pedidos.length,
      canceled: this.pedidos.filter((pedido) => pedido.status === "cancelado"),
      pronto: this.pedidos.filter((pedido) => pedido.status === "pronto"),
      entregue: this.pedidos.filter((pedido) => pedido.status === "entregue"),
      transito: this.pedidos.filter(
        (pedido) => pedido.status === "em transito"
      ),
      fila: this.pedidos.filter((pedido) => pedido.status === "na fila"),
    };
  }
}

export default createContext(new PedidosStore());
