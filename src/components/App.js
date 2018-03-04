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
    return (
      <div className="row">
        <div className="col">You're not logged in</div>
      </div>
    );
  }

  renderNote() {
    return (
      <div className="col-8">
        <LockButton currentNote={this.props.currentNote} />
        <NoteDetails />
        <Note />
      </div>
    );
  }

  renderNotePlaceholder() {
    return <div className="col-8">No note yet.</div>;
  }

  renderNoteSection() {
    const isNoteSelected = this.props.currentNote;
    const currentNote = isNoteSelected
      ? this.renderNote()
      : this.renderNotePlaceholder();

    return (
      <div className="row">
        <div className="col-4">
          <ListOptions />
          <List
            notes={this.props.notes}
            setCurrentNote={this.props.setCurrentNote}
          />
        </div>
        {currentNote}
      </div>
    );
  }

  renderMainContent() {
    return this.props.userIsLoggedIn
      ? this.renderNoteSection()
      : this.renderLogin();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        {this.renderMainContent()}
        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
