import React from 'react';
import { dateToString } from '../lib/format.js';

function ListItem(props) {
  return (
    <li className="list-group-item" key={`${props.id}`}>
      {props.title}, from
      {dateToString(props.createdAt)}
    </li>
  );
}

export default ListItem;
