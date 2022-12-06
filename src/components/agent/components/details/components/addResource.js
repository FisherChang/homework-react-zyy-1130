import Popup from "reactjs-popup";
import {InputResource} from "./inputResource";
import React from "react";

export function AddResource() {
    return <Popup className="add-resource" trigger={<i className="icon-plus"></i>} position="bottom center">
        <InputResource/>
    </Popup>;
}
