import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from '../components/SelectBox';
import Button from '../components/Button';
import TextBox from '../components/TextBox';

const propTypes = {
  id: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

class TodoItem extends React.Component {
  state = {
    label: this.props.todo.label,
    text: this.props.todo.text,
    isEdited: false
  };

  onSaveEdit = () => {
    const { label, text } = this.state;
    this.setState({
      text: text,
      label: label,
      isEdited: false
    });
  };

  // BUG: after one edit onCancel restores initial value
  // not the one before current edit
  onCancelEdit = () => {
    const { todo } = this.props;
    this.setState({
      text: todo.text,
      label: todo.label,
      isEdited: false
    });
  };

  onClickEdit = () => this.setState({ isEdited: true });
  onClickDelete = () => {
    const { removeTodo, id } = this.props;
    return removeTodo(id);
  };

  onLabelChange = event => this.setState({ label: event.target.value });
  onTextChange = value => this.setState({ text: value });

  renderView() {
    const { id } = this.props;
    const { label, text } = this.state;
    return (
      <div className="todo-item" key={id}>
        <strong>{label}</strong>
        <span>{text}</span>
        <Button onClick={this.onClickEdit} value="Edit" />
        <Button onClick={this.onClickDelete} value="Delete" />
      </div>
    );
  }

  renderEdit() {
    const { id } = this.props;
    const { label, text } = this.state;
    return (
      <div className="todo-item" key={id}>
        <SelectBox label={label} onChange={this.onLabelChange} />
        <TextBox value={text} onChange={this.onTextChange} />
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
