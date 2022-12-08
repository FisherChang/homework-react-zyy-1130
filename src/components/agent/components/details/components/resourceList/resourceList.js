import React, { useState } from "react";
import { updateResource } from "../../../../api/api";
import { ResourceInputBox } from "./resourceInputBox";

export function ResourceList(props) {
  const [showElem, setShowElem] = useState("none");
  function renderInputBox() {
    setShowElem(showElem === "none" ? "flex" : "none");
  }

  const [resourceItem, setResourceItem] = useState([]);
  function handleClickAdd() {
    const newResources = [...props.resources, resourceItem];
    updateResource(props.id, newResources).then((data) =>
      setResourceItem(data)
    );
    renderInputBox();
  }

  return (
    <div className="resource-list">
      <i className="icon-plus" onClick={renderInputBox}></i>
      <ResourceInputBox
        display={showElem}
        onXClick={renderInputBox}
        value={resourceItem}
        onChange={(e) => setResourceItem(e.target.value)}
        onAddClick={handleClickAdd}
      />
      {props.resources.map((resource) => (
        <div className="resource-item" key={resource}>
          <span>{resource}</span>
          <i className="icon-trash"></i>
        </div>
      ))}
    </div>
  );
}
