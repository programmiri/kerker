import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  return (
    <div className={`alert alert-${ props.context }`} role="alert">
    { props.text }
    </div>
  )
}

Alert.propTypes = {
  context: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  text: PropTypes.string.isRequired
};

Alert.defaultProps = {
  context: 'primary'
};

export default Alert;
