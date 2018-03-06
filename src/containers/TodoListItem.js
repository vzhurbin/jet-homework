import React from 'react';
import PropTypes from 'prop-types';
import { TextBox, Button, SelectBox } from '../components';

const propTypes = {
  id: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

class TodoItem extends React.Component {
  state = {
    newTodoLabel: this.props.todo.label,
    newTodoText: this.props.todo.text,
    isEdited: false
  };

  onSaveEdit = () => {
    const { newTodoLabel, newTodoText } = this.state;
    this.setState({
      newTodoText: newTodoText,
      newTodoLabel: newTodoLabel,
      isEdited: false
    });
  };

  // BUG: after one edit onCancel restores initial value
  // not the one before current edit
  onCancelEdit = () => {
    const { todo } = this.props;
    this.setState({
      newTodoText: todo.text,
      newTodoLabel: todo.label,
      isEdited: false
    });
  };

  onClickEdit = () => this.setState({ isEdited: true });
  onClickDelete = () => {
    const { removeTodo, id } = this.props;
    return removeTodo(id);
  };

  onLabelChange = event => this.setState({ newTodoLabel: event.target.value });
  onTextChange = value => this.setState({ newTodoText: value });

  renderView() {
    const { id } = this.props;
    const { newTodoLabel, newTodoText } = this.state;
    return (
      <div className="todo-item" key={id}>
        <strong>{newTodoLabel}</strong>
        <span>{newTodoText}</span>
        <Button onClick={this.onClickEdit} value="Edit" />
        <Button onClick={this.onClickDelete} value="Delete" />
      </div>
    );
  }

  renderEdit() {
    const { id } = this.props;
    const { newTodoLabel, newTodoText } = this.state;
    return (
      <div className="todo-item" key={id}>
        <SelectBox label={newTodoLabel} onChange={this.onLabelChange} />
        <TextBox value={newTodoText} onChange={this.onTextChange} />
        <Button onClick={this.onSaveEdit} value="Save" />
        <Button onClick={this.onCancelEdit} value="Cancel" />
      </div>
    );
  }

  render() {
    const { isEdited } = this.state;
    return isEdited ? this.renderEdit() : this.renderView();
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem;
