
import React from "react";
import './agent.scss';
import AgentDetails from "./details/agentDetails";
import agents from '../db.json';
import AgentHeader from "./header/agentHeader";

function Agent (){
    return(
        <section className="agent">
            <AgentHeader agents={agents} />
            <AgentDetails agents={agents}/>
        </section>

    )
}

export default Agent;

