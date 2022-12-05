import React, {useEffect, useState} from "react";
import "../../ASSETS/font_icons/fonts.css";
import "./agentDetails.scss";
import { fetchAgents } from "../api";
import {BasicInfo} from "./components/basicInfo";
import {ResourceInfo} from "./components/resourceInfo";

function AgentDetails () {
  const [agents, setAgents] =useState([]);
  useEffect(()=>{
    fetchAgents().then((data)=>setAgents(data));
  },[])

  return (
    <section className="agent-list">
      {agents.map(({id, ip, location, name, os, resources, status}) => (
        <div className="agent-item" key={id}>
          <figure>
            <img src={require(`../../ASSETS/os_icons/${os}.png`)} alt={os}/>
          </figure>
          <div className="agent-item-content">
            <BasicInfo name={name} status={status} ip={ip} location={location}/>
            <ResourceInfo resources={resources}/>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AgentDetails;
