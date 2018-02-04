import React, { Component } from 'react';
import App from './App';
import PropTypes from 'prop-types';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      notes: [
        {
          id: '109156be-c4fb-41ea-b1b4-efe1671c5836',
          title: 'Hello',
          body: 'This is my body',
          bodyPersistedVersion: 'This is my body',
          bodyEncrypted: 'SECRET',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '209156be-c4fb-41ea-b1b4-efe1671c5836',
          title: 'Another note',
          body: 'Another body',
          bodyPersistedVersion: 'Another body',
          bodyEncrypted: 'SECRET2',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    };
  }

  render() {
    return <App notes={this.state.notes} isLoggedIn={this.state.isLoggedIn} />;
  }
}

export default AppContainer;
