import React from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import TextBox from '../components/TextBox';
import Radio from '../components/Radio';
import { queryFilter, radioFilter } from "../helpers";

export default class TodoList extends React.Component {
  state = {
    search: '',
    todos: {},
    text: '',
    label: 'Low',
    selectedRadio: ''
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
    const search = this.state.search;
    const radio = this.state.selectedRadio;
    const todosKeys = queryFilter(todosObj, search, radio);

    return (
      <div>
        <AddTodoForm
          text={this.state.text}
          label={this.state.label}
          onLabelChange={e => this.setState({ label: e.target.value })}
          onInputChange={e => this.setState({ text: e.target.value })}
          addTodo={this.addTodo}
        />
        <TextBox
          value={search}
          onChange={value => this.setState({ search: value })}
        />
        <Radio
          selectedRadio = {this.state.selectedRadio}
          onChange={e => this.setState({ selectedRadio: e.target.value })}
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
