// src/components/Header.js
import React from "react";
//import "./Header.css";
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";

const Header = () => {
  return (
    <header className="header">
      <HamburgerMenu />
      <div className="header-right">
        <SearchBar />
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
