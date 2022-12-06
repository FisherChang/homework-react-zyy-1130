import React from "react";

export function Figure(props) {
    return <figure>
        <img src={require(`../../../../../assets/os_icons/${props.os}.png`)} alt={props.os}/>
    </figure>;
}
