import React from "react";
import "../ASSETS/font_icons/fonts.css";
import windows from "../ASSETS/os_icons/windows.png";

const AgentDetails = ({ agents }) => {
  return (
    <section className="agentList">
      {agents.map(({id, ip, location, name, os, resources, status}) => (
        <div className="agentItem" key={id}>
          <figure>
            <img src={windows} alt={os} />
          </figure>
          <div className="agentInfo">
            <i className="icon-desktop"></i>
            <h4>{name}</h4>
            <p className="status">{status}</p>
            <i className="icon-info"></i>
            <p className="ip">{ip}</p>
            <i className="icon-folder"></i>
            <p className="location">{location}</p>
          </div>
          <div className="agentTypeList">
            <p>{resources}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AgentDetails;
