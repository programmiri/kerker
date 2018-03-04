import React from 'react';

function LockButton(props) {
  const buttonIcon = props.currentNote.body ? 'fa-unlock' : 'fa-lock';

  return <i className={`fas fa-4x ${buttonIcon}`} />;
}

export default LockButton;
