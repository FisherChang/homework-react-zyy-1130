import React from "react";
import "../../../../../assets/font_icons/fonts.css";
import "../agentDetails.scss";
import {GetResources} from "./getResources";
import {Deny} from "./deny";
import {AddResource} from "./addResource";

export function ResourceInfo(props) {

    return (
        <div className="resources">
            <AddResource id={props.id} resources={props.resources}/>
            <GetResources resources={props.resources}/>
            <Deny/>
        </div>
    );

}
