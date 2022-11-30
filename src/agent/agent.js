
import React from "react";
import './agent.scss';
import AgentDetails from "./agentDetails";
import agents from '../db.json';

function Agent (){
    return(
        <section className="agent">
            <AgentDetails agents={agents}/>
        </section>

    )
}

export default Agent;

