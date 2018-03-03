import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    text: '',
    label: 'Med'
  }

  handleInputChange = event => {
    this.setState({ text: event.target.value })
  }

  addTodo = event => {
    event.preventDefault();
    const todo = {
      id: Date.now(),
      label: this.state.label,
      text: this.state.text,
      isEdited: false
    }
    const todos = [...this.state.todos, todo];
    this.setState({ todos: todos, text: '' });
  }

  removeTodo = (item, index) => {
    let todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  }

  render() {
    const todos = [...this.state.todos];
    const text = this.state.text;

    return (
      <div>
        <form onSubmit={this.addTodo}>
          <select>
            <option value="med">Med</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
          <input 
            type="text"
            value={text}
            placeholder='What to do?'
            onChange={this.handleInputChange}
          />
          <button>+ Add</button>
        </form>
        <ul>
          {todos.map((item, index) => {
            return (
              <TodoItem 
                item={item}
                index={index}
                key={item.id}
                removeTodo={this.removeTodo}
              />
            );
          })}
        </ul>
      </div>
    )
  }
}
