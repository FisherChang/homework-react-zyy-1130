import React from "react";
import "../../../../../assets/font_icons/fonts.css";
import "../agentDetails.scss";
import { ResourceList } from "./resourceList";
import { Deny } from "./deny";
import { ResourceAddition } from "./resourceAddition";

export function ResourceInfo(props) {
  return (
    <div className="resources">
      <ResourceAddition id={props.id} resources={props.resources} />
      <ResourceList resources={props.resources} />
      <Deny />
    </div>
  );
}
