import React from "react";
import "./menu.scss";
import "../../assets/font_icons/fonts.css";
import { getElement } from "./components/getElement";
import { MenuBrowser } from "./components/menuBrowser";

function Menu({ menuItems }) {
  return (
    <aside className="menu">
      <MenuBrowser map={menuItems.map((item) => getElement(item))} />
    </aside>
  );
}

export default Menu;
