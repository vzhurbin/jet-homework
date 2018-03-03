import React from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

export default class TodoList extends React.Component {
  state = {
    todos: {},
    text: '',
    label: ''
  }

  onInputChange = event => {
    this.setState({ text: event.target.value })
  }

  onLabelChange = event => {
    this.setState({ label: event })
  }

  addTodo = event => {
    event.preventDefault();
    const todos = { ...this.state.todos };
    todos[`todo${Date.now()}`] = {
      label: this.state.label,
      text: this.state.text,
      isEdited: false
    }
    this.setState({ todos: todos, text: '' });
  }

  removeTodo = key => {
    const todos = {...this.state.todos};
    delete todos[key];
    this.setState({ todos });
  }

  // editTodo = (item, index) => {
  //   const item = {
  //     label: this.state.label,
  //     text: this.state.text
  //   }
  //   let todos = [...this.state.todos];
  //   todos[index] = item;
  //   this.setState({ todos: todos });
  // }

  render() {
    const todosObj = {...this.state.todos};
    const todosArr = Object.keys(todosObj);
    const text = this.state.text;

    return (
      <div>
        <AddTodoForm
          text={text}
          onLabelChange={this.onLabelChange}
          onInputChange={this.onInputChange}
          addTodo={this.addTodo}
        />
        <ul>
          {todosArr.map(key => {
            return (
              <TodoItem
                id={key}
                key={key}
                todo={todosObj[key]}
                removeTodo={this.removeTodo}
                // editTodo={this.editTodo}
              />
            );
          })}
        </ul>
      </div>
    )
  }

}
