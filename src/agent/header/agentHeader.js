import React from "react";
import "../../ASSETS/font_icons/fonts.css";
import "./agentHeader.scss";

import status from '../../status.json';
import types from '../../type.json';

import {StatusList} from "./components/statusList";
import {TypeList} from "./components/typeList";

const AgentHeader = () => {
    return(
        <section className="agent-header">
            <StatusList status_s={status}/>
            <TypeList types={types} />
        </section>
    );
};

export default AgentHeader;
