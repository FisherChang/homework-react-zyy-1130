import { ExplainOfInput } from "./explainOfInput";
import { ButtonAddResources } from "./buttonAddResources";
import { ButtonCancel } from "./buttonCancel";
import React from "react";

export function ResourceInputBox(props) {
  return (
    <div
      className="add-resource-content"
      style={{ display: props.display, zIndex: 999 }}
    >
      <div className="input-resource">
        <ExplainOfInput onXClick={props.onXClick} />
        <input
          value={props.value}
          onChange={props.onChange}
          type="text"
          placeholder="e.g.Chrome,Firefox"
        />
        <ButtonAddResources onAddClick={props.onAddClick} />
        <ButtonCancel onCancelClick={props.onXClick} />
      </div>
    </div>
  );
}
