import React from 'react';
import PropTypes from 'prop-types';
import { SelectBox, TextBox } from '../components';

const propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

class AddTodoForm extends React.Component {
  state = {
    newTodoLabel: 'low',
    newTodoText: ''
  };

  onAddTodo = event => {
    const { newTodoLabel, newTodoText } = this.state;
    const { onAddTodo } = this.props;
    event.preventDefault();
    if (newTodoLabel.length > 0 && newTodoText.length > 0) {
      const newTodo = {
        text: newTodoText,
        label: newTodoLabel,
        isEdited: false
      };
      this.setState({ newTodoText: '' }, () => onAddTodo(newTodo));
    }
  };

  onLabelChange = event => this.setState({ newTodoLabel: event.target.value });
  onInputChange = value => this.setState({ newTodoText: value });

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
