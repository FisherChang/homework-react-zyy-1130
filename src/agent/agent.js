
import React from "react";
import './agent.scss';
import debin from '../ASSETS/os_icons/debin.png';
import windows from '../ASSETS/os_icons/windows.png';
import AgentDetails from "./agentDetails";
import agents from '../../mock-server/db.json';

function Agent (){
    return(
        <section className="agent">
            <img src={debin} alt="deb" />
            <img src={windows} alt="win" />


            <AgentDetails agents={agents}/>
        </section>

    )
}

export default Agent;

