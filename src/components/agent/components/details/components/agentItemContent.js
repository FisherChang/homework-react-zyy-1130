import {BasicInfo} from "./basicInfo";
import {ResourceInfo} from "./resourceInfo";
import React from "react";

export function AgentItemContent(props) {
    return <div className="agent-item-content">
        <BasicInfo name={props.name} status={props.status} ip={props.ip} location={props.location}/>
        <ResourceInfo resources={props.resources}/>
    </div>;
}
