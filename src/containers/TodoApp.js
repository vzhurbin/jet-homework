import React from 'react';
import { TodoList, AddTodoForm } from '../containers';

export default class TodoApp extends React.Component {
  state = {
    todos: {}
  };

  onAddTodo = todo => {
    const newTodos = { ...this.state.todos };
    newTodos[`todo${Date.now()}`] = todo;
    this.setState({ todos: newTodos });
  };

  onRemoveTodo = id => {
    const { todos } = this.state;
    const newTodos = todos;
    delete newTodos[id];
    this.setState({ newTodos });
  };

  onSaveEdit = (editedTodo, id) => {
    const newTodos = this.state.todos;
    newTodos[id] = editedTodo;
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <AddTodoForm onAddTodo={this.onAddTodo} />
        <TodoList
          todos={todos}
          onSaveEdit={this.onSaveEdit}
          onRemoveTodo={this.onRemoveTodo}
        />
      </div>
    );
  }
}
