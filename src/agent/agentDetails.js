import React from "react";
import "../ASSETS/font_icons/fonts.css";
import "./agentDetails.scss";

const AgentDetails = ({ agents }) => {
  // console.log(agents);

  return (
    <section className="agentList">
      {agents.map(({id, ip, location, name, os, resources, status}) => (
        <div className="agentItem" key={id}>
          <figure>
            <img src={require(`../ASSETS/os_icons/${os}.png`)} alt={os} />
          </figure>
          <div className="agentContent">
            <div className="agentInfo">
              <i className="icon-desktop"></i>
              <h4>{name}</h4>
              <p className="status">{status}</p>
              <i className="icon-info"></i>
              <p className="ip">{ip}</p>
              <i className="icon-folder"></i>
              <p className="location">{location}</p>
            </div>
            <div className="agentType">
              <i className="icon-plus"></i>
              <div className="resource-list">
                <div className="resource-item">
                  <span>{resources[0]}</span>
                  <i className="icon-trash"></i>
                </div>
                <div className="resource-item">
                  <span>{resources[1]}</span>
                  <i className="icon-trash"></i>
                </div>
                <div className="resource-item">
                  <span>{resources[2]}</span>
                  <i className="icon-trash"></i>
                </div>
                <div className="resource-item">
                  <span>{resources[3]}</span>
                  <i className="icon-trash"></i>
                </div>
              </div>
              <div className="deny">
                <i className="icon-deny"></i>
                <span>Deny</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AgentDetails;
