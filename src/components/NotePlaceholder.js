import React from "react";
import Alert from "./Alert";
import TextPlaceholder from "./TextPlaceholder";

function NotePlaceholder(props) {
  return (
    <React.Fragment>
      <Alert context="success" text="Please decode your note."/>
      <TextPlaceholder />
    </React.Fragment>
  );
}

export default NotePlaceholder;
