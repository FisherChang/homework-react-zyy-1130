import React from "react";
import "../../../../../assets/font_icons/fonts.css";
import "../agentDetails.scss";
import {GetResources} from "./getResources";
import {Deny} from "./deny";

export function ResourceInfo(props) {
    return (
        <div className="resources">
            <i className="icon-plus"></i>
            <GetResources resources={props.resources}/>
            <Deny/>
        </div>
    );

}
