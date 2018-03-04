import React from 'react';

const TextBox = props => {
  const onChange = props.onChange;
  const value = props.value || '';
  return (
    <input 
      type="text" 
      value={value} 
      onChange={e => onChange(e.target.value)} 
    />
  );
}

export default TextBox;
