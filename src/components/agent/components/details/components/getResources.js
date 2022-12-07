import React from "react";

export function GetResources(props) {
  return (
    <div className="resource-list">
      {props.resources.map((resource) => (
        <div className="resource-item" key={resource}>
          <span>{resource}</span>
          <i className="icon-trash"></i>
        </div>
      ))}
    </div>
  );
}
