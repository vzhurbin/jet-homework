import React from 'react';
import SelectBox from '../components/SelectBox';
import Button from '../components/Button';
import TextBox from '../components/TextBox';

export default class TodoItem extends React.Component {
  state = {
    text: this.props.todo.text,
    label: this.props.todo.label,
    isEdited: false
  }

  onEditText = event => {
    this.setState({ text: event })
  }

  onEditLabel = event => {
    this.setState({ label: event })
  }

  onSaveEdit = () => {
    this.setState({
      text: this.state.text,
      type: this.state.label,
      isEdited: false
    });
  };

  onCancelEdit = () => {
    this.setState({
      text: this.props.todo.text,
      label: this.props.todo.type,
      isEdited: false
    });
  };

  renderView() {
    const id = this.props.id;
    return (
      <div className="todo-item" key={id}>
        <strong>{this.state.label}</strong>
        <span>{this.state.text}</span>
        <Button
          onClick={() => this.setState({ isEdited: true })}
          children="Edit"
        />
        <Button
          onClick={() => this.props.removeTodo(id)}
          children="Delete"
        />
      </div>
    );
  }

  renderEdit() {
    const text = this.state.text;
    const label = this.state.label;
    const id = this.props.id;
    return (
      <div className="todo-item" key={id}>
        <SelectBox
          value={label}
          onChange={this.onEditLabel}
        />
        <TextBox
          value={text}
          onChange={this.onEditText}
        />
        <Button
          onClick={this.onSaveEdit}
          children="Save"
        />
        <Button
          onClick={this.onCancelEdit}
          children="Cancel"
        />
      </div>
    );
  }

  render() {
    const isEdited = this.state.isEdited;
    return isEdited ? this.renderEdit() : this.renderView();
  }
}
