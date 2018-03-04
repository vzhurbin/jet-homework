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

const SelectBox = props => {
  const onChange = props.onChange;
  return (
    <select 
      label={props.label} 
      onChange={e => onChange(e.target.value)}
    >
      {labels.map(item => {
        return (
          <option key={`select${item.value}${item.label}`}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
