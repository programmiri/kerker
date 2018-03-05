import React from "react";

function LockButton(props) {
  const buttonIcon = props.currentNote.body ? "fa-unlock" : "fa-lock";

  return (
    <div className="text-right py-4">
      <i className={`fas fa-3x ${buttonIcon}`} />
    </div>
  );
}

export default LockButton;
