import React from 'react';
import PropTypes from 'prop-types';
import labels from '../constants/labels';

const propTypes = {
  selectedRadio: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

function Radio({ selectedRadio, onChange }) {
  return (
    <div className="radio-buttons">
      <strong>Show Labels: </strong>
      <label key={`radioAll`}>
        <input
          type="radio"
          value="All"
          checked={selectedRadio === 'All'}
          onChange={onChange}
        />
        {'All'}
      </label>
      {labels.map(item => {
        return (
          <label key={`radio${item.value}`}>
            <input
              type="radio"
              value={item.value}
              checked={selectedRadio === item.value}
              onChange={onChange}
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
