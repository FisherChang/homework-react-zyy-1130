import React from 'react';
import './agentHeader.scss';

export const StatusList=({status_s})=>{
    return(
        <div className="status">
            {status_s.map((status)=>(
                <li className={status.className} key={status.id}>
                    <i className={status.icon}></i>
                    <div className="status-name">{status.name}</div>
                    <div className="status-number">{status.number}</div>
                </li>
            ))}
        </div>
    );
};

export const TypeList=({types})=>{
    return(
        <div className="types">
            {types.map((type)=>(
                <div className={type.className} key={type.id}>
                    <div className="type-name">{type.name}</div>
                    <div className="type-number">{type.number}</div>
                </div>
            ))}
        </div>
    );
};

