import React from 'react';
import PropTypes from 'prop-types';
import { TextBox, Button, SelectBox } from '../components';

const propTypes = {
  id: PropTypes.string.isRequired,
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onSaveEdit: PropTypes.func.isRequired
};

class TodoItem extends React.Component {
  state = {
    newTodoLabel: this.props.todo.label,
    newTodoText: this.props.todo.text,
    isEdited: false
  };

  onSaveEditHandler = e => {
    const { newTodoLabel, newTodoText } = this.state;
    const { onSaveEdit, id } = this.props;
    e.preventDefault();
    const editedTodo = {
      text: newTodoText,
      label: newTodoLabel,
      isEdited: false
    };
    onSaveEdit(editedTodo, id);
    this.setState({ isEdited: false });
  };

  onCancelEditHandler = () => {
    const { todo } = this.props;
    this.setState({
      newTodoText: todo.text,
      newTodoLabel: todo.label,
      isEdited: false
    });
  };

  onClickEditHandler = () => this.setState({ isEdited: true });
  onClickDeleteHandler = () => {
    const { onRemoveTodo, id } = this.props;
    return onRemoveTodo(id);
  };

  onLabelChange = e => this.setState({ newTodoLabel: e.target.value });
  onTextChange = e => this.setState({ newTodoText: e.target.value });

  renderView() {
    const { id, todo } = this.props;
    return (
      <div className="todo-item" key={id}>
        <strong>{todo.label}</strong>
        <span>{todo.text}</span>
        <Button onClick={this.onClickEditHandler} value="Edit" />
        <Button onClick={this.onClickDeleteHandler} value="Delete" />
      </div>
    );
  }

  renderEdit() {
    const { id } = this.props;
    const { newTodoLabel, newTodoText } = this.state;
    return (
      <div className="todo-item" key={id}>
        <SelectBox label={newTodoLabel} onChange={this.onLabelChange} />
        <form onSubmit={this.onSaveEditHandler}>
          <TextBox value={newTodoText} onChange={this.onTextChange} />
          <button>Save</button>
        </form>
        <Button onClick={this.onCancelEditHandler} value="Cancel" />
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
