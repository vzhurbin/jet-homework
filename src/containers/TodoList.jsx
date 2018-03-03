import React from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

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
        <AddTodoForm 
          text={text}
          handleInputChange={this.handleInputChange}
          addTodo={this.addTodo}
        />
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
