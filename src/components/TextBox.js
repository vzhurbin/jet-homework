import React from 'react';

const TextBox = props => {
  const onChange = props.onChange;
  const value = props.value || '';
  const placeholder = props.placeholder || '';
  return (
    <input 
      type="text" 
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)} 
    />
  );
}

export default TextBox;
