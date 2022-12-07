import React, {useEffect, useState} from "react";
import "../../../../assets/font_icons/fonts.css";
import "./agentDetails.scss";
import {fetchAgents} from "../../api/api";
import {AgentItemContent} from "./components/agentItemContent";
import {Figure} from "./components/figure";


function AgentDetails () {
  const [agents, setAgents] =useState([]);
  useEffect(()=>{
    fetchAgents().then((data)=>setAgents(data));
  },[])

  return (
    <section className="agent-list">
      {agents.map(({id, ip, location, name, os, resources, status}) => (
        <div className="agent-item" key={id}>
          <Figure os={os}/>
          <AgentItemContent name={name} status={status} ip={ip} location={location} resources={resources} id={id} />
        </div>
      ))}
    </section>
  );
}

export default AgentDetails;
