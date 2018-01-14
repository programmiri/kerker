import React from 'react';

function Alert(props) {
  return (
    <div className={`alert alert-${ props.context }`} role="alert">
    { props.text }

    </div>
  )
}

export default Alert;
