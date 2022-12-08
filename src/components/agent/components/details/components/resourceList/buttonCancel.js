import React from "react";

export function ButtonCancel(props) {
  return (
    <button className="button-Cancel" onClick={props.onCancelClick}>
      Cancel
    </button>
  );
}
