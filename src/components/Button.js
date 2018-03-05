import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

function Button(props) {
  const onClick = props.onClick;
  const value = props.value;
  return <button onClick={onClick}>{value}</button>;
}

Button.propTypes = propTypes;

export default Button;
