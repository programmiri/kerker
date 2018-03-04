import React from "react";
import PropTypes from "prop-types";
import { dateToString } from "../lib/format.js";

function ListItem(props) {
  const handleClick = event => {
    event.preventDefault();
    props.setCurrentNote(props.note);
  };
  return (
    <li className="list-group-item" key={`${props.id}`} onClick={handleClick}>
      {props.title}, from
      {dateToString(props.createdAt)}
    </li>
  );
}

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired
};
