import React from "react";

export function InputResource() {
    return <div className="input-resource">
        <p>Separate multiple resource name with commas</p>
        <input placeholder="e.g.Chrome,Firefox"/>
        <button className="button-Add-Resources">Add Resources</button>
        <button className="button-Cancel">Cancel</button>
    </div>;
}
