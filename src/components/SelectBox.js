import React from 'react';
import { labels } from '../constants/labels'

const SelectBox = props => {
  return (
    <select 
      label={props.label} 
      onChange={e => props.onChange(e)}
    >
      {labels.map(item => {
        return (
          <option key={`select${item.value}`}>
            {item.value}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
