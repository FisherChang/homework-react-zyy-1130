import {Dropdown} from "rsuite";
import React from "react";

export function ProfileDropdown({dropDownItems}) {
    return <Dropdown className="profile-channel">
        {dropDownItems.map((dropDownItem)=>(
            <Dropdown.Item className="profile-item" key={dropDownItem.id}>
                <i className={dropDownItem.icon}></i>
                {dropDownItem.name}
            </Dropdown.Item>
        ))}
    </Dropdown>;
}
