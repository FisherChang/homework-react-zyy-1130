import React from "react";
import "../../../../../assets/font_icons/fonts.css";
import "../agentDetails.scss";
import {GetResources} from "./getResources";
import {Deny} from "./deny";
import {AddResource} from "./addResource";

// import {updateResource} from "../../../api/api";

export function ResourceInfo(props) {

    return (
        <div className="resources">
            <AddResource/>
            <GetResources resources={props.resources}/>
            <Deny/>
        </div>
    );

}
