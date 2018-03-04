import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

function List(props) {
  const listItems = props.notes.map(item => (
    <ListItem
      key={item.id}
      id={item.id}
      title={item.title}
      createdAt={item.createdAt}
      note={item}
      setCurrentNote={props.setCurrentNote}
    />
  ));

  return <ul className="list-group">{listItems}</ul>;
}

export default List;

List.propTypes = {
  notes: PropTypes.array.isRequired
};
