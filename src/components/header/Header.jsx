import React from "react";
import "./header.scss";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from '@mui/icons-material/Share';
import LaunchIcon from '@mui/icons-material/Launch';
function Header() {
  return (
    <div className="header-main">
      <div className="header-wrapper">
        <div className="header-title">
          <RefreshIcon className="icon" />
          <p> Sales Dashboard</p>
        </div>

        <div className="time">
          Wed <span>10.24 a.m.</span>31 st August 2016
        </div>

        <div className="share">
            <ShareIcon className="icon"/>
            <LaunchIcon className="icon"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
