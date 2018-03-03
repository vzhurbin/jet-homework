import React from 'react';

const labels = [
  {
    label: 'Высокий',
    value: 'high',
  },
  {
    label: 'Низкий',
    value: 'low',
  },
];

const SelectBox = props => {
  const value = props.value;
  const onChange = props.onChange;
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {labels.map(item => {
        return (
          <option key={`${item.value}${item.label}`} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
