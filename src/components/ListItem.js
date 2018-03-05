import React from "react";
import PropTypes from "prop-types";
import { dateToString } from "../lib/format.js";

function ListItem(props) {
  const handleClick = event => {
    event.preventDefault();
    props.setCurrentNote(props.note);
  };
  return (
    <div
      className="ListItem list-group-item"
      key={`${props.id}`}
      onClick={handleClick}
    >
      <small className="ListItem-date text-right">
        created: {dateToString(props.createdAt)}
      </small>
      <p className="ListItem-title mb-0">{props.title}</p>
    </div>
  );
}

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired
};
