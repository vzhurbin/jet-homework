import React from 'react';

const labels = [
  // {
  //   label: 'Priority',
  //   value: '',
  // },
  {
    label: 'Low',
    value: 'low',
  },
  {
    label: 'Med',
    value: 'med',
  },
  {
    label: 'High',
    value: 'high',
  },
];

const Radio = props => {
  const selectedRadio = props.selectedRadio;
  const onChange = props.onRadioChange;
  return (
    <div 
      className="radio-buttons"
    >
      {labels.map(item => {
        return (
          <label 
            key={`radio${item.value}${item.label}`}
          >
            <input
              type="radio"
              value={item.value}
              checked={selectedRadio === item.value}
              onChange={e => onChange(e.target.value)}
            />
              {item.label}
          </label>
        );
      })}
    </div>
  );
}

export default Radio;
