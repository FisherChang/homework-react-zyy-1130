import React from "react";
import {Dropdown} from 'rsuite';

import './topPage.scss';
import '../ASSETS/font_icons/fonts.css';

import logo from "../ASSETS/logo/logo.svg";
import avatar from "../ASSETS/logo/avatar.jpg";

class TopPage extends React.Component {
    render() {
        return(
            <header className="topPage">
                <img className="cruise-logo" src={logo} alt="logo" height="40px" />
                <img className="profile-logo" src={avatar} alt="avatar" height="40px" />
                <Dropdown className="dropdown">
                    <Dropdown.Item className="item">
                        <i className="icon-id-card"></i>
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Item className="item">
                        <i className="icon-sign-in"></i>
                        Sign Out
                    </Dropdown.Item>
                </Dropdown>
            </header>
        );
    }
}

export default TopPage;
