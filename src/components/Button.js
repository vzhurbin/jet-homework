import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

function Button({ onClick, value }) {
  return <button onClick={onClick}>{value}</button>;
}

Button.propTypes = propTypes;

export default Button;
