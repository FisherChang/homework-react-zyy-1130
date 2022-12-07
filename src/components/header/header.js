import React from "react";

import "./header.scss";
import "../../assets/font_icons/fonts.css";

import logo from "../../assets/logo/logo.svg";
import avatar from "../../assets/logo/avatar.jpg";
import dropDownItems from "../../json/dropDown.json";
import { ProfileDropdown } from "./profileDropdown";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="cruise-logo" src={logo} alt="logo" height="40px" />
        <img className="profile-logo" src={avatar} alt="avatar" height="40px" />
        <ProfileDropdown dropDownItems={dropDownItems} />
      </header>
    );
  }
}

export default Header;
