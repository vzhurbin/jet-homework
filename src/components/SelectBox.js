import React from 'react';
import PropTypes from 'prop-types';
import labels from '../constants/labels';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

const defaultProps = {
  label: ''
};

function SelectBox(props) {
  return (
    <select label={props.label} onChange={e => props.onChange(e)}>
      {labels.map(item => {
        return <option key={`select${item.value}`}>{item.value}</option>;
      })}
    </select>
  );
}

SelectBox.propTypes = propTypes;
SelectBox.defaultProps = defaultProps;

export default SelectBox;
