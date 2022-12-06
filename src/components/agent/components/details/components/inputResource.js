import React from "react";

export function InputResource() {
    return <div className="input-resource">
        <p>Separate multiple resource name with commas</p>
        <input placeholder="e.g.Chrome,Firefox"/>
        <button>Add Resources</button>
        <button>Cancel</button>
    </div>;
}
