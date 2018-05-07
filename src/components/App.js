import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import ListOptions from "./ListOptions";
import Note from "./Note";
import NoteDetails from "./NoteDetails";
import LockButton from "./LockButton";
import NotePlaceholder from "./NotePlaceholder";

class App extends Component {
  renderLogin() {
    return <div className="App-login-notice">You're not logged in</div>;
  }

  renderNote() {
    const noteDetails = this.props.currentNoteEncrypted ?  <NoteDetails createdAt={this.props.currentNote.createdAt} /> : null;
    const note = this.props.currentNoteEncrypted ? <Note text={this.props.currentNote.bodyPersistedVersion}/> : <NotePlaceholder />;
    return (
      <div className="App-note-section ml-4">
        <LockButton currentNoteEncrypted={this.props.currentNoteEncrypted} setCurrentNoteEncodingState={this.props.setCurrentNoteEncodingState}/>
        {noteDetails}
        {note}
      </div>
    );
  }

  renderNotePlaceholder() {
    return (
      <div className="App-note-section ml-4 d-flex align-items-center justify-content-center">
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
        <div className="App-note-options">
          <ListOptions />
          <List
            notes={this.props.notes}
            currentNote={this.props.currentNote}
            setCurrentNote={this.props.setCurrentNote}
            setCurrentNoteEncodingState={this.props.setCurrentNoteEncodingState}
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
        <header className="App-header">
          <Header positionInGrid=""/>
        </header>
        {this.renderMainContent()}
        <Footer />
      </div>
    );
  }
}

export default App;
