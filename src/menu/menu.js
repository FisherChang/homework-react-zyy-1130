import React from "react";
import './menu.scss';
import '../ASSETS/font_icons/fonts.css';
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import Agent from "../agent/agent";
import Home from "../home";

function Menu ({menuItems}){
    return(
        <aside className="menu">
            <BrowserRouter>
                <Routes>
                    <Route path="/agent" element={<Agent/>} />
                    <Route path="/home" element={<Home />} />
                </Routes>
                <ul className="menu-list">
                    {menuItems.map((item)=>(
                        <li key={item.id}>
                            {
                                item.label==="AGENT"
                                    ? <Link className="link" to="/agent">
                                        <i className={item.icon}></i>
                                        {item.label}</Link>
                                    : <Link className="link" to="/home">
                                        <i className={item.icon}></i>
                                        {item.label}</Link>
                            }
                        </li>
                    ))}
                </ul>
                <ul className="history-list">
                    <h3 className="history-title">History</h3>
                    <ul className="history-info">
                        <li>bjstdmngbgr02/Acceptance_test</li>
                    </ul>
                </ul>
            </BrowserRouter>
        </aside>
    )
}

export default Menu;
