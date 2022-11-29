import React from "react";
import './sideBar.scss';
import '../ASSETS/font_icons/fonts.css';
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import Content from "../content/content";
import HomePage from "../homePage";

function SideBar ({menuItems}){
    return(
        <aside className="sideBar">
            <BrowserRouter>
                <Routes>
                    <Route path="/content" element={<Content/>} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
                <ul className="menuList">
                    {menuItems.map((item)=>(
                        <li key={item.id}>
                            {
                                item.label==="AGENT"
                                    ? <Link className="link" to="/content">
                                        <i className={item.icon}></i>
                                        {item.label}</Link>
                                    : <Link className="link" to="/home">
                                        <i className={item.icon}></i>
                                        {item.label}</Link>
                            }
                        </li>
                    ))}
                </ul>
                <ul className="history">
                    <h3>History</h3>
                    <ul className="history-info">
                        <li>bjstdmngbgr02/Acceptance_test</li>
                    </ul>
                </ul>
            </BrowserRouter>
        </aside>
    )
}

export default SideBar;
