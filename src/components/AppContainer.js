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
          title: "Very secret note about something",
          body: null,
          bodyPersistedVersion: "This is my body",
          bodyEncrypted: "SECRET",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "209156be-c4fb-41ea-b1b4-efe1671c5836",
          title: "Secret Codes",
          body: "Another body",
          bodyPersistedVersion: "Another body",
          bodyEncrypted: "SECRET",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "209156be-c4fb-41ea-b1b4-efe1671c5834",
          title: "All the Bitcoin investment plans",
          body: "Another body",
          bodyPersistedVersion: "Another body",
          bodyEncrypted: "SECRET",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      currentNote: null,
      currentNoteEncrypted: true
    };
    this.setCurrentNote = this.setCurrentNote.bind(this);
    this.setCurrentNoteEncodingState = this.setCurrentNoteEncodingState.bind(this);
  }

  setCurrentNote(note) {
    this.setState({ currentNote: note });
  }

  setCurrentNoteEncodingState(value) {
    this.setState({ currentNoteEncrypted: value });
  }

  render() {
    return (
      <App
        notes={this.state.notes}
        userIsLoggedIn={this.state.userIsLoggedIn}
        currentNote={this.state.currentNote}
        currentNoteEncrypted={this.state.currentNoteEncrypted}
        setCurrentNote={this.setCurrentNote}
        setCurrentNoteEncodingState={this.setCurrentNoteEncodingState}
      />
    );
  }
}

export default AppContainer;
