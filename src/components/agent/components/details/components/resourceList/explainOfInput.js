import React from "react";

export function ExplainOfInput(props) {
  return (
    <div className="input-explain">
      <p>Separate multiple resource name with commas</p>
      <i className="icon-close" onClick={props.onXClick}></i>
    </div>
  );
}
