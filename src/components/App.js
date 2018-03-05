import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import ListOptions from "./ListOptions";
import Note from "./Note";
import NoteDetails from "./NoteDetails";
import LockButton from "./LockButton";

class App extends Component {
  renderLogin() {
    return <div className="App-login-notice">You're not logged in</div>;
  }

  renderNote() {
    return (
      <div className="App-note-section border p-5 mb-3">
        <LockButton currentNote={this.props.currentNote} />
        <NoteDetails />
        <Note />
      </div>
    );
  }

  renderNotePlaceholder() {
    return (
      <div className="App-note-section font-hint bg-light mb-3 d-flex justify-content-center align-items-center">
        Currently no note selected.
      </div>
    );
  }

  renderNoteSection() {
    const isNoteSelected = this.props.currentNote;
    const currentNote = isNoteSelected
      ? this.renderNote()
      : this.renderNotePlaceholder();

    return (
      <React.Fragment>
        <div className="App-note-options pr-5">
          <ListOptions />
          <List
            notes={this.props.notes}
            setCurrentNote={this.props.setCurrentNote}
          />
        </div>
        {currentNote}
      </React.Fragment>
    );
  }

  renderMainContent() {
    return this.props.userIsLoggedIn
      ? this.renderNoteSection()
      : this.renderLogin();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.renderMainContent()}
        <Footer />
      </div>
    );
  }
}

export default App;
