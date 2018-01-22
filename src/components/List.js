import React from 'react';
import ListItem from './ListItem';

function List(props) {
  return (
    <ul className="list-group">
      <ListItem
        name= "this is a list item"
      />
      <ListItem
        name= "this is another list item"
      />
    </ul>
  )
}

export default List;
