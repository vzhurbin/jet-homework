import React from 'react';
import PropTypes from 'prop-types';
import labels from '../constants/labels';

const propTypes = {
  selectedRadio: PropTypes.string.isRequired
};

function Radio(props) {
  const selectedRadio = props.selectedRadio;
  return (
    <div className="radio-buttons">
      {labels.map(item => {
        return (
          <label key={`radio${item.value}`}>
            <input
              type="radio"
              value={item.value}
              checked={selectedRadio === item.value}
              onChange={e => props.onChange(e)}
            />
            {item.value}
          </label>
        );
      })}
    </div>
  );
}

Radio.propTypes = propTypes;

export default Radio;
