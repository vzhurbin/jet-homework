import React from 'react';
import PropTypes from 'prop-types';
import labels from '../constants/labels';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

const defaultProps = {
  label: 'low'
};

function SelectBox({ label, onChange }) {
  const onLabelChange = e => onChange(e);
  return (
    <select label={label} onChange={onLabelChange}>
      {labels.map(item => {
        return <option key={`select${item.value}`}>{item.value}</option>;
      })}
    </select>
  );
}

SelectBox.propTypes = propTypes;
SelectBox.defaultProps = defaultProps;

export default SelectBox;
