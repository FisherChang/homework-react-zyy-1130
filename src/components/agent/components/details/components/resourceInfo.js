import React from "react";
import "../../../../../assets/font_icons/fonts.css";
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

function Deny() {
    return <div className="deny">
        <i className="icon-deny"></i>
        <span>Deny</span>
    </div>;
}

export function ResourceInfo(props) {
    return (
        <div className="resources">
            <i className="icon-plus"></i>
            <GetResources resources={props.resources}/>
            <Deny/>
        </div>
    );

}
