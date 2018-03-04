import React, { Component } from "react";
// import Alert from './Alert';
import App from "./App";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userIsLoggedIn: true,
      notes: [
        {
          id: "109156be-c4fb-41ea-b1b4-efe1671c5836",
          title: "Hello",
          body: null,
          bodyPersistedVersion: "This is my body",
          bodyEncrypted: "SECRET",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "209156be-c4fb-41ea-b1b4-efe1671c5836",
          title: "Another note",
          body: "Another body",
          bodyPersistedVersion: "Another body",
          bodyEncrypted: "SECRET2",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      currentNote: null
    };
    this.setCurrentNote = this.setCurrentNote.bind(this);
  }

  setCurrentNote(note) {
    this.setState({ currentNote: note });
  }

  render() {
    return (
      <App
        notes={this.state.notes}
        userIsLoggedIn={this.state.userIsLoggedIn}
        currentNote={this.state.currentNote}
        setCurrentNote={this.setCurrentNote}
      />
    );
  }
}

export default AppContainer;
