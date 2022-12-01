import React from "react";
import "../ASSETS/font_icons/fonts.css";
import "./agentHeader.scss";

const AgentHeader = () => {
    return(
        <section className="agentHeader">
            <ul className="components">
                <li className="building">
                    <i className="icon-cog"></i>
                    <div className="name">Building</div>
                    <div className="number">3</div>
                </li>
                <li className="idle">
                    <i className="icon-coffee"></i>
                    <div className="name">Idle</div>
                    <div className="number">5</div>
                </li>
                <div className="box">
                    <div className="all">
                        <div className="box-name">ALL</div>
                        <div className="box-number">8</div>
                    </div>
                    <div className="physical">
                        <div className="box-name">PHYSICAL</div>
                        <div className="box-number">4</div>
                    </div>
                    <div className="virtual">
                        <div className="box-name">VIRTUAL</div>
                        <div className="box-number">4</div>
                    </div>
                </div>
            </ul>
        </section>
    );
};

export default AgentHeader;
