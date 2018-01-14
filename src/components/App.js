import React, { Component } from 'react';
import logo from './../images/logo.png';
import Alert from './Alert';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header d-block">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="h4">Welcome to Kerker</p>
        </header>
        <Alert text="This is the text" context="primary"/>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
