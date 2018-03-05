import React from "react";
import logo from "./../images/logo.png";

function Header(props) {
  return (
    <header className="Header text-right">
      <img src={logo} className="Header-logo" alt="logo" />
      <p className="lead">Welcome to Kerker</p>
    </header>
  );
}

export default Header;
