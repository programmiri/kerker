import React from 'react';

function ListItem(props) {
  return (
    <li className="list-group-item">
      {props.name}
    </li>
  )
}

export default ListItem;
