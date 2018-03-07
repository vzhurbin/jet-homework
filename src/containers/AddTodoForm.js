import React from 'react';
import PropTypes from 'prop-types';
import { SelectBox, TextBox } from '../components';
import labels from '../constants/labels';

const propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

class AddTodoForm extends React.Component {
  state = {
    newTodoLabel: labels[0].value,
    newTodoText: ''
  };

  onAddTodo = e => {
    const { newTodoLabel, newTodoText } = this.state;
    const { onAddTodo } = this.props;
    e.preventDefault();
    if (newTodoLabel.length > 0 && newTodoText.length > 0) {
      const newTodo = {
        text: newTodoText,
        label: newTodoLabel,
        isEdited: false
      };
      this.setState({ newTodoText: '' }, () => onAddTodo(newTodo));
    }
  };

  onLabelChange = e => this.setState({ newTodoLabel: e.target.value });
  onInputChange = e => this.setState({ newTodoText: e.target.value });

  render() {
    const { newTodoLabel, newTodoText } = this.state;
    return (
      <form onSubmit={this.onAddTodo}>
        <SelectBox label={newTodoLabel} onChange={this.onLabelChange} />
        <TextBox
          value={newTodoText}
          placeholder="What to do?"
          onChange={this.onInputChange}
          autoFocus
        />
        <button>+ Add</button>
      </form>
    );
  }
}

AddTodoForm.propTypes = propTypes;

export default AddTodoForm;
