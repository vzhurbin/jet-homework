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

function AddTodoForm(props) {
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

AddTodoForm.propTypes = propTypes;

export default AddTodoForm;
