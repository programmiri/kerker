import React, { Component } from 'react';
import logo from './../images/logo.svg';
import Alert from './Alert';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">Welcome to Kerker</div>
        </header>
        <Alert text="This is the text" context="primary"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
