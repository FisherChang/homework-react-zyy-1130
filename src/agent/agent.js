
import React from "react";
import './agent.scss';
import debin from '../ASSETS/os_icons/debin.png';
import windows from '../ASSETS/os_icons/windows.png';


function Agent (){
    return(
        <div className="content">
            <img src={debin} alt="deb" />
            <img src={windows} alt="win" />
        </div>
    )
}

export default Agent;

