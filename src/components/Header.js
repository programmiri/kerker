import React from 'react';
import logo from './../images/logo.png';

function Header(props) {
  return (
    <header className="text-right">
      <img src={logo} alt="logo" />
      <p className="h4">Welcome to Kerker</p>
      <hr />
    </header>
  )
}

export default Header;
