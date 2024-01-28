import React from "react";
import { Menu } from "../menu/menu.component";
import "./header.style.scss";
import logo from "../../../assets/img/white_logo.png";

export const Header = () => {
  return (
    <header className="Header">
      <img className="Header__logo" src={logo} alt="" />
      <Menu />
    </header>
  );
};
