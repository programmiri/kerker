import React from "react";
import logo from "./../images/logo-color.png";

function Header(props) {
  return (
    <div className="Header d-flex justify-content-end align-items-center">
      <h1 className="Header-text text-secondary pr-3">Welcome to Kerker</h1>
      <img src={logo} className="Header-logo" alt="logo" />
    </div>
  );
}

export default Header;
