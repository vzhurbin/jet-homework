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

// const onButtonClick = e => onChange(e.target.value);

function TextBox({ onChange, value, placeholder }) {
  const onButtonClick = e => onChange(e.target.value);
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onButtonClick}
    />
  );
}

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;
