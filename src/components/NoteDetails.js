import React from "react";
import Alert from "./Alert";
import { dateToString } from "../lib/format.js";

function NoteDetails(props) {
  return (
    <React.Fragment>
      <Alert context="warning" text="Dont't forget to decrypt your note!"/>
      <small className="font-s  font-monospace">
        <i className="far fa-calendar" /> created: {dateToString(props.createdAt)}
      </small>
    </React.Fragment>
  );
}

export default NoteDetails;
