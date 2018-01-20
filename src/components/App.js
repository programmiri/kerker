import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import List from './List';
import ListOptions from './ListOptions';
import Note from './Note';
import NoteDetails from './NoteDetails';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <ListOptions />
          <List />
        </div>
        <div className="col-8">
          <NoteDetails />
          <Note />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
