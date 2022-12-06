import React from "react";
import "../../../../../assets/font_icons/fonts.css";
import "../agentDetails.scss";
import {GetResources} from "./getResources";
import {Deny} from "./deny";
import Popup from "reactjs-popup";

// import {updateResource} from "../../../api/api";

export function ResourceInfo(props) {

    return (
        <div className="resources">
            <Popup trigger={<i className="icon-plus"></i>} position="bottom center">
                <div>
                    <p>Separate multiple resource name with commas</p>
                    <input placeholder="e.g.Chrome,Firefox"/>
                    <button>Add Resources</button>
                    <button>Cancel</button>
                </div>
            </Popup>
            <GetResources resources={props.resources}/>
            <Deny/>
        </div>
    );

}
