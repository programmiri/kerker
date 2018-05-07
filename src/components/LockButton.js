import React from "react";

function LockButton(props) {


  const toggleEncodingState = event => {
    event.preventDefault();
    props.setCurrentNoteEncodingState(!props.currentNoteEncrypted);
  };

  const buttonIcon = props.currentNoteEncrypted ? "fa-unlock" : "fa-lock";

  return (
    <div className="LockButton text-right pb-4" onClick={toggleEncodingState}>
      <i className={`fas fa-3x ${buttonIcon}`} />
    </div>
  );
}

export default LockButton;
