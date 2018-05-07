import React from "react";
import PropTypes from "prop-types";
import { dateToString } from "../lib/format.js";

function ListItem(props) {

  const handleClick = event => {
    event.preventDefault();
    props.setCurrentNote(props.note);
    props.setCurrentNote(props.note);
    props.setCurrentNoteEncodingState(false);
  };

  const textIsOpen = props.isActive ? 'is open' : null;
  const activeItemClass = props.isActive ? 'ListItem-active-item' : null;
  const backgroundClass = props.index % 2 === 0 ? 'bg-light' : null;

  return (
    <li
      className={`ListItem list-group-item p-2 ${backgroundClass} ${activeItemClass}`}
      key={`${props.id}`}
      onClick={handleClick}
    >
      <div className="ListItem-open-hint font-s text-secondary text-right">
        {textIsOpen}
      </div>
      <p className="ListItem-title my-1">{props.title}</p>
      <small className="ListItem-date text-dark font-s font-monospace mb-2">
        created: {dateToString(props.createdAt)}
      </small>
    </li>
  );
}

export default ListItem;

ListItem.defaultProps = {
  isActive: true
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  isActive: PropTypes.bool.isRequired,
};
