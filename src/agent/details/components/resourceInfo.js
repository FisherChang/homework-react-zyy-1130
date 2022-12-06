import React from "react";
import "../../../ASSETS/font_icons/fonts.css";
import "../agentDetails.scss";

function GetResources(props) {
    return <div className="resource-list">
        {props.resources.map((resource) => (
            <div className="resource-item" key={resource}>
                <span>{resource}</span>
                <i className="icon-trash"></i>
            </div>
        ))}
    </div>;
}

export function ResourceInfo(props) {
    return (
        <div className="resources">
            <i className="icon-plus"></i>
            <GetResources resources={props.resources} />
            <div className="deny">
                <i className="icon-deny"></i>
                <span>Deny</span>
            </div>
        </div>
    );

}
