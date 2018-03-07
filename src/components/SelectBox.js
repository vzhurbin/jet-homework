import React from 'react';
import PropTypes from 'prop-types';
import labels from '../constants/labels';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

function SelectBox({ label, onChange }) {
  return (
    <select label={label} onChange={onChange}>
      {labels.map(item => {
        return <option key={`select${item.value}`}>{item.value}</option>;
      })}
    </select>
  );
}

SelectBox.propTypes = propTypes;

export default SelectBox;
