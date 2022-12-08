import React from "react";
import "../agentCards.scss";

export const StatusList = ({ status_s }) => {
  return (
    <div className="status">
      {status_s.map((status) => (
        <li className={status.className} key={status.id}>
          <i className={status.icon}></i>
          <div className="status-name">{status.name}</div>
          <div className="status-number">{status.number}</div>
        </li>
      ))}
    </div>
  );
};
