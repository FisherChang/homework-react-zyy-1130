import React from "react";
import { Dropdown } from "rsuite";

import "./header.scss";
import "../ASSETS/font_icons/fonts.css";

import logo from "../ASSETS/logo/logo.svg";
import avatar from "../ASSETS/logo/avatar.jpg";

function ProfileDropdown() {
    return <Dropdown className="profile-channel">
        <Dropdown.Item className="profile-item">
            <i className="icon-id-card"></i>
            Profile
        </Dropdown.Item>
        <Dropdown.Item className="profile-item">
            <i className="icon-sign-in"></i>
            Sign Out
        </Dropdown.Item>
    </Dropdown>;
}

class Header extends React.Component {
  render() {
    return (
      <header>
          <img className="cruise-logo" src={logo} alt="logo" height="40px"/>
          <img className="profile-logo" src={avatar} alt="avatar" height="40px"/>
          <ProfileDropdown/>
      </header>
    );
  }
}

export default Header;
