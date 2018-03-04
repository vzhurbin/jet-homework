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
  // const onChange = props.onLabelChange;
  return (
    <select 
      label={props.label} 
      onChange={e => props.onChange(e)}
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
