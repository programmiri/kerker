import React, { Component } from 'react';
// import Alert from './Alert';
import Footer from './Footer';
import Header from './Header';
import Workspace from './Workspace';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Workspace />
        <Footer />
      </div>
    );
  }
}

export default App;
