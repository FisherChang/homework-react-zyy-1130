import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./routesComponent";
import { MenuList } from "./menuList";
import { HistoryList } from "./historyList";
import React from "react";

export function MenuBrowser(props) {
  return (
    <BrowserRouter>
      <RoutesComponent />
      <MenuList map={props.map} />
      <HistoryList />
    </BrowserRouter>
  );
}
