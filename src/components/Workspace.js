import React from 'react';
import List from './List';
import ListOptions from './ListOptions';
import Note from './Note';
import NoteDetails from './NoteDetails';


function Workspace(props) {
  return (
    <div class="row">
      <div class="col-4">
        <ListOptions />
        <List />
      </div>
      <div className="col-8">
        <NoteDetails />
        <Note />
      </div>
    </div>
  )
}

export default Workspace;
