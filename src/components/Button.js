import React from 'react';

const Button = props => {
  const onClick = props.onClick;
  const value = props.value;
  return <button onClick={onClick}>{value}</button>;
};

export default Button;
