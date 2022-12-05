import React from "react";
import "../../../ASSETS/font_icons/fonts.css";
import "../agentDetails.scss";

export function BasicInfo(props) {
    return <div className="basic-info">
        <i className="icon-desktop"></i>
        <h4>{props.name}</h4>
        <p className={`status-${props.status}`}>{props.status}</p>
        <i className="icon-info"></i>
        <p className="ip">{props.ip}</p>
        <i className="icon-folder"></i>
        <p className="location">{props.location}</p>
    </div>;
}
