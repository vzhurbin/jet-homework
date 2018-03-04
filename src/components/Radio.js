import React from 'react';

const labels = [
  // {
  //   value: 'Priority',
  // },
  {
    value: 'low',
  },
  {
    value: 'med',
  },
  {
    value: 'high',
  },
];

const Radio = props => {
  const selectedRadio = props.selectedRadio;
  return (
    <div 
      className="radio-buttons"
    >
      {labels.map(item => {
        return (
          <label 
            key={`radio${item.value}`}
          >
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

export default Radio;
