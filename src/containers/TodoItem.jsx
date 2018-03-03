import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    const todo = this.props.todo;
    const key = this.props.id;
    return (
      <div className="todo-item" key={key}>
        <strong>{todo.label}</strong>
        <span>{todo.text}</span>
        {/* <button
          onClick={this.editTodo}  
        >
          Edit
        </button> */}
        <button 
          onClick={() => this.props.removeTodo(key)}
        >
          Delete
        </button>
      </div>
    );
  }

  // renderEdit() {
  //   const item = this.props.item;
  //   const index = this.props.index;
  //   const id = this.props.item.id;
  //   return (
  //     <div className="todo-item" key={id}>
  //       <strong>{item.label}</strong>
  //       <span>{item.text}</span>
  //       <button
  //         onClick={this.editTodo}  
  //       >
  //         Edit
  //       </button>
  //       <button 
  //         onClick={this.removeTodo}
  //       >
  //         Delete
  //       </button>
  //     </div>
  //   );
  // }
}
