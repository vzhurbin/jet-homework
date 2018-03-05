import React from 'react';
import SelectBox from '../components/SelectBox';
import Button from '../components/Button';
import TextBox from '../components/TextBox';

export default class TodoItem extends React.Component {
  state = {
    text: this.props.todo.text,
    label: this.props.todo.label,
    isEdited: false
  };

  onSaveEdit = () => {
    this.setState({
      text: this.state.text,
      type: this.state.label,
      isEdited: false
    });
  };

  // BUG: after one edit onCancel restores initial value
  // not the one before current edit
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
          value="Edit"
        />
        <Button onClick={() => this.props.removeTodo(id)} value="Delete" />
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
          onChange={value => this.setState({ label: value })}
        />
        <TextBox
          value={text}
          onChange={value => this.setState({ text: value })}
        />
        <Button onClick={this.onSaveEdit} value="Save" />
        <Button onClick={this.onCancelEdit} value="Cancel" />
      </div>
    );
  }

  render() {
    const isEdited = this.state.isEdited;
    return isEdited ? this.renderEdit() : this.renderView();
  }
}
