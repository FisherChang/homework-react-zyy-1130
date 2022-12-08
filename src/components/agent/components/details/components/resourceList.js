import React, { useState } from "react";
import { updateResource } from "../../../api/api";

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
      <div
        className="add-resource-content"
        style={{ display: showElem, zIndex: 999 }}
      >
        <div className="input-resource">
          <div className="explains">
            <p>Separate multiple resource name with commas</p>
            <i className="icon-close" onClick={renderInputBox}></i>
          </div>
          <input
            value={resourceItem}
            onChange={(e) => setResourceItem(e.target.value)}
            type="text"
            placeholder="e.g.Chrome,Firefox"
          />
          <button className="button-Add-Resources" onClick={handleClickAdd}>
            Add Resources
          </button>
          <button className="button-Cancel" onClick={renderInputBox}>
            Cancel
          </button>
        </div>
      </div>
      {props.resources.map((resource) => (
        <div className="resource-item" key={resource}>
          <span>{resource}</span>
          <i className="icon-trash"></i>
        </div>
      ))}
    </div>
  );
}
