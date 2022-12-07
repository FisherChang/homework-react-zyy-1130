import Popup from "reactjs-popup";
import { InputResource } from "./inputResource";
import React from "react";

export function AddResource(props) {
  return (
    <Popup
      className="add-resource"
      trigger={<i className="icon-plus"></i>}
      position="bottom left"
    >
      <InputResource id={props.id} resources={props.resources} />
    </Popup>
  );
}
