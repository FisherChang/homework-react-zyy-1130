import React from "react";
import '../agentHeader.scss';
export const TypeList = ({types}) => {
    return (
        <div className="types">
            {types.map((type) => (
                <div className={type.className} key={type.id}>
                    <div className="type-name">{type.name}</div>
                    <div className="type-number">{type.number}</div>
                </div>
            ))}
        </div>
    );
};
