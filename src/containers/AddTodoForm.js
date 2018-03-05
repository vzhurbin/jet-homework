import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from '../components/SelectBox';
import TextBox from '../components/TextBox';

const propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  onLabelChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
};

function AddTodoForm({ text, label, addTodo, onLabelChange, onInputChange }) {
  return (
    <form onSubmit={e => addTodo(e)}>
      <SelectBox label={label} onChange={onLabelChange} />
      <TextBox
        value={text}
        placeholder="What to do?"
        onChange={onInputChange}
        autoFocus
      />
      <button>+ Add</button>
    </form>
  );
}

AddTodoForm.propTypes = propTypes;

export default AddTodoForm;
