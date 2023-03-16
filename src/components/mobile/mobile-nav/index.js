import React, { useState } from "react";
import "./_mobile-nav.scss";
import NCBTextLogo from "../../../images/ncb-text-logo.png";
import SearchIcon from "../../../images/search-icon.png";
import HamburgerIcon from "../../../images/hamburger-icon.png";

export const MobileNav = () => {
  return (
    <div className="nav">
      <div className="nav-title">
        <img id="text-logo" src={NCBTextLogo} />
      </div>
      <div className="nav-items">
        <div className="nav-search">
          <img id="search-icon" src={SearchIcon} /> Search
        </div>
        <div className="nav-hamburger-menu">
          <img id="hamburger-icon" src={HamburgerIcon} />
        </div>
      </div>
    </div>
  );
};
