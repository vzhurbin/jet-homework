import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  state = {
    todos: []
  }

  addTodo = event => {
    event.preventDefault();
    const todo = {
      label: this.props.label,
      text: this.props.text,
      isEdited: false
    }
    const todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
    event.target.reset();
  }

  render() {
    const todos = this.state.todos;

    return (
      <div>
        <form onSubmit={this.addTodo}>
          <select>
            <option value="med">Med</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
          <input placeholder='What to do?' />
          <button type="submit">+ Submit</button>
        </form>
        <ul>
          {todos.map(item => {
            <TodoItem todo={item} />
          })}
        </ul>
      </div>
    )
  }
}
