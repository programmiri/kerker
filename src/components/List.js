import React from 'react';
import ListItem from './ListItem';

function List(props) {

  const listItems = props.notes.map((item) =>
    <ListItem
      key={item.id}
      title={item.title}
      createdAt={item.createdAt}
    />
  )

  return (
    <ul className="list-group">
      { listItems }
    </ul>
  )
}

export default List;
