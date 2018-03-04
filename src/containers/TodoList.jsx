import React from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

export default class TodoList extends React.Component {
  state = {
    todos: {},
    text: '',
    label: ''
  }

  onFormLabelChange = event => {
    this.setState({ label: event })
  }

  onFormInputChange = event => {
    this.setState({ text: event.target.value })
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

  removeTodo = id => {
    const todos = {...this.state.todos};
    delete todos[id];
    this.setState({ todos });
  }
  
  saveEdit = (todo, key) => {
    const todos = { ...this.state.todos };  
    todos[key] = todo;
    this.setState({ todos });
  };

  render() {
    const todosObj = {...this.state.todos};
    const todosKeys = Object.keys(todosObj);
    const text = this.state.text;

    return (
      <div>
        <AddTodoForm
          text={text}
          onEditLabel={this.onFormLabelChange}
          onFormInputChange={this.onFormInputChange}
          addTodo={this.addTodo}
        />
        <ul>
          {todosKeys.map(key => {
            return (
              <TodoItem
                id={key}
                key={key}
                todo={todosObj[key]}
                removeTodo={this.removeTodo}
                saveEdit={this.saveEdit}
              />
            );
          })}
        </ul>
      </div>
    )
  }

}
