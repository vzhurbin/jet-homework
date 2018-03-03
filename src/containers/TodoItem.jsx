import React from 'react';

export default class TodoItem extends React.Component {
  removeTodo = (item, index) => {
    this.props.removeTodo(item, index);
  }

  render() {
    const item = this.props.item;
    const index = this.props.index;
    const id = this.props.item.id;
    return (
      <div className="todo-item" key={id}>
        <strong>{item.label}</strong>
        <span>{item.text}</span>
        <button>Edit</button>
        <button 
          onClick={this.removeTodo}
        >
          Delete
        </button>
      </div>
    );
  }
}
