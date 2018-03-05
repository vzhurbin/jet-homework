import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

const defaultProps = {
  value: '',
  placeholder: ''
};

function TextBox({ onChange, value, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  );
}

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;
