import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">React & Node</span>
        <span className="headerTitleLarge">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperswide.com/download/laptop-wallpaper-1920x1080.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
