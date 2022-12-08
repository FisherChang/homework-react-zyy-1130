import Popup from "reactjs-popup";
import { ResourceInputBox } from "./resourceInputBox";
import React from "react";

export function ResourceAddition(props) {
  return (
    <Popup
      className="add-resource"
      trigger={<i className="icon-plus"></i>}
      position="bottom left"
    >
      <ResourceInputBox id={props.id} resources={props.resources} />
    </Popup>
  );
}
