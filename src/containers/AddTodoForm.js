import React from 'react';
import SelectBox from '../components/SelectBox';
import TextBox from '../components/TextBox';

export default function AddTodoForm(props) {
  const text = props.text;
  const label = props.label;
  return (
    <form onSubmit={e => props.addTodo(e)}>
      <SelectBox label={label} onChange={e => props.onLabelChange(e)} />
      <TextBox
        value={text}
        placeholder="What to do?"
        onChange={e => props.onInputChange(e)}
        autoFocus
      />
      <button>+ Add</button>
    </form>
  );
}
