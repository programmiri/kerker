import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import List from './List';
import ListOptions from './ListOptions';
import Note from './Note';
import NoteDetails from './NoteDetails';

class App extends Component {
  renderNotes() {
    return (
      <div className="row">
        <div className="col-4">
          <ListOptions />
          <List notes={this.props.notes} />
        </div>
        <div className="col-8">
          <NoteDetails />
          <Note />
        </div>
      </div>
    );
  }

  renderLogin() {
    return (
      <div className="row">
        <div className="col">You're not logged in</div>
      </div>
    );
  }

  renderMainContent() {
    return this.props.isLoggedIn ? this.renderNotes() : this.renderLogin();
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

App.propTypes = {
  notes: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default App;
