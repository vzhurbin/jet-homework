import React from 'react';

export default function Button(props) {
  const onClick = props.onClick;
  const value = props.value;
  return <button onClick={onClick}>{value}</button>;
}
