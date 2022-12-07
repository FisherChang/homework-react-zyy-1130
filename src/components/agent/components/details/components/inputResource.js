import React, { useState } from "react";
import { updateResource } from "../../../api/api";

export function InputResource(props) {
  const [resourceItem, setResourceItem] = useState([]);

  function handleClickAdd() {
    const newResources = [...props.resources, resourceItem];
    updateResource(props.id, newResources).then((data) =>
      setResourceItem(data)
    );
  }

  return (
    <div className="input-resource">
      <p>Separate multiple resource name with commas</p>
      <input
        value={resourceItem}
        onChange={(e) => setResourceItem(e.target.value)}
        type="text"
        placeholder="e.g.Chrome,Firefox"
      />
      <button className="button-Add-Resources" onClick={handleClickAdd}>
        Add Resources
      </button>
      <button className="button-Cancel">Cancel</button>
    </div>
  );
}
