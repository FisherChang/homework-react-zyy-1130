import React from "react";
import './agent.scss';

import AgentDetails from "./components/details/agentDetails";
import AgentCards from "./components/cards/agentCards";

import agents from '../../mock-server/db.json';

function Agent (){
    return(
        <section className="agent">
            <AgentCards />
            <AgentDetails agents={agents} />
        </section>

    )
}

export default Agent;

