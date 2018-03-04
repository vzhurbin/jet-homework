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
  const value = props.value;
  const onChange = props.onChange;
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {labels.map(item => {
        return (
          <option key={`${item.value}${item.label}`}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
