import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

function List(props) {
  const listItems = props.notes.map((item, index) => (
    <ListItem
      key={item.id}
      id={item.id}
      title={item.title}
      createdAt={item.createdAt}
      note={item}
      setCurrentNote={props.setCurrentNote}
      setCurrentNoteEncodingState={props.setCurrentNoteEncodingState}
      index={index}
      isActive={props.currentNote === item}
    />
  ));
  return <ul className="List list-group">{listItems}</ul>;
}

export default List;

List.propTypes = {
  notes: PropTypes.array.isRequired
};
