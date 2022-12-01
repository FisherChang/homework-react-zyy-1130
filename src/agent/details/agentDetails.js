import React from "react";
import "../../ASSETS/font_icons/fonts.css";
import "./agentDetails.scss";

function BasicInfo(props) {
  return <div className="agentInfo">
    <i className="icon-desktop"></i>
    <h4>{props.name}</h4>
    <p className={`status-${props.status}`}>{props.status}</p>
    <i className="icon-info"></i>
    <p className="ip">{props.ip}</p>
    <i className="icon-folder"></i>
    <p className="location">{props.location}</p>
  </div>;
}

function getResources(resources) {
  return <div className="resourceList">
    {resources.map((resource) => (
        <div className="resourceItem" key={resource}>
          <span>{resource}</span>
          <i className="icon-trash"></i>
        </div>
    ))}
  </div>;
}

function ResourceInfo(props) {
  return <div className="agentResources">
    <i className="icon-plus"></i>
    {getResources(props.resources)}
    <div className="deny">
      <i className="icon-deny"></i>
      <span>Deny</span>
    </div>
  </div>;
}

const AgentDetails = ({ agents }) => {
  // console.log(agents);

  return (
    <section className="agentList">
      {agents.map(({id, ip, location, name, os, resources, status}) => (
        <div className="agentItem" key={id}>
          <figure>
            <img src={require(`../../ASSETS/os_icons/${os}.png`)} alt={os}/>
          </figure>
          <div className="agentContent">
            <BasicInfo name={name} status={status} ip={ip} location={location}/>
            <ResourceInfo resources={resources}/>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AgentDetails;
