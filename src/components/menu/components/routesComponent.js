import {Route, Routes} from "react-router-dom";
import Agent from "../../agent/agent";
import Home from "../../home";
import React from "react";

export function RoutesComponent() {
    return <Routes>
        <Route path="/agent" element={<Agent/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>;
}
