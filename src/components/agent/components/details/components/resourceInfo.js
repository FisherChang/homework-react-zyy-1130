import React from "react";
import "../../../../../assets/font_icons/fonts.css";
import "../agentDetails.scss";
import { ResourceList } from "./resourceList";
import { Deny } from "./deny";

export function ResourceInfo(props) {
  return (
    <div className="resources">
      <ResourceList resources={props.resources} id={props.id} />
      <Deny />
    </div>
  );
}
