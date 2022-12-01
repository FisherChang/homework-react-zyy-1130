import React from "react";
import './agent.scss';

import AgentDetails from "./details/agentDetails";
import AgentHeader from "./header/agentHeader";

import agents from '../db.json';

function Agent (){
    return(
        <section className="agent">
            <AgentHeader />
            <AgentDetails agents={agents} />
        </section>

    )
}

export default Agent;

