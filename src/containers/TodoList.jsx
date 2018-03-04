import React from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import TextBox from '../components/TextBox';
import { filterObject } from "../helpers";

export default class TodoList extends React.Component {
  state = {
    query: undefined,
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

  // BUG: initial label is not parsed
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

  render() {
    const todosObj = {...this.state.todos};
    const query = this.state.query;
    const todosKeys = query ? filterObject(todosObj, query) : Object.keys(todosObj);
    const text = this.state.text;

    return (
      <div>
        <AddTodoForm
          text={text}
          onEditLabel={this.onFormLabelChange}
          onFormInputChange={this.onFormInputChange}
          addTodo={this.addTodo}
        />
        <TextBox
          value={query}
          onChange={value => this.setState({ query: value })}
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
