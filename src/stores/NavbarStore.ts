import { createContext } from "react";
import { action, makeObservable, observable, computed } from "mobx";

interface iNavButtons {
  text: string;
  active: boolean;
  link: string;
}

class NavbarStore {
  buttons: iNavButtons[] = [
    { text: "home", active: true, link: "/" },
    { text: "caixa", active: false, link: "/caixa" },
    { text: "pedidos", active: false, link: "/pedidos" },
    { text: "cardápio", active: false, link: "/cardapio" },
    { text: "whatsapp", active: false, link: "/chat" },
    { text: "configurações", active: false, link: "/config" },
  ];

  constructor() {
    makeObservable(this, {
      buttons: observable,
      toggleActiveButton: action,
      allButtons: computed,
    });
  }

  toggleActiveButton = (nome: String) => {
    this.buttons = this.buttons.map((button) => {
      if (button.text === nome) {
        return {
          ...button,
          active: true,
        };
      }
      return {
        ...button,
        active: false,
      };
    });
  };

  get allButtons() {
    return {
      buttons: this.buttons,
    };
  }
}

export default createContext(new NavbarStore());
