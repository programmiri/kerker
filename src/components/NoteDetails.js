import React from "react";

function NoteDetails(props) {
  return (
    <div className="NoteDetail text-right mb-4 font-monospace">
      <small>
        <i class="far fa-calendar" /> created: 2018-01-01 | last edited:
        2018-01-01
      </small>
    </div>
  );
}

export default NoteDetails;
