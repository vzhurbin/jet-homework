import React from 'react';

export default class TodoItem extends React.Component {
  state = {
    label: this.props.type,
    text: this.props.text,
    isEdited: false
  }

  render() {
    return (
      <div>
        <strong>{this.state.label}</strong>
        <span>{this.state.text}</span>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}
