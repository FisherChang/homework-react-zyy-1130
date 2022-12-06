import {Link} from "react-router-dom";
import React from "react";

export function getElement(item) {
    return <li key={item.id}>
        {
            item.label === "AGENT"
                ? <Link className="link" to="/agent">
                    <i className={item.icon}></i>
                    {item.label}</Link>
                : <Link className="link" to="/home">
                    <i className={item.icon}></i>
                    {item.label}</Link>
        }
    </li>;
}
