import React from "react";
import "../../../../assets/font_icons/fonts.css";
import "./agentCards.scss";

import status from "../../../../json/status.json";
import types from "../../../../json/type.json";

import { StatusList } from "./components/statusList";
import { TypeList } from "./components/typeList";

const AgentCards = () => {
  return (
    <section className="agent-cards">
      <StatusList status_s={status} />
      <TypeList types={types} />
    </section>
  );
};

export default AgentCards;
