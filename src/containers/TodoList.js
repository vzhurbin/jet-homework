import React from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import TextBox from '../components/TextBox';
import Radio from '../components/Radio';
import { queryFilter } from '../helpers';

export default class TodoList extends React.Component {
  state = {
    search: '',
    todos: {},
    text: '',
    label: 'low',
    selectedRadio: ''
  };

  addTodo = event => {
    event.preventDefault();
    const { label, text, todos } = this.state;
    const newTodos = { ...todos };
    newTodos[`todo${Date.now()}`] = {
      label: label,
      text: text,
      isEdited: false
    };
    this.setState({ todos: newTodos, text: '' });
  };

  removeTodo = id => {
    const todos = { ...this.state.todos };
    delete todos[id];
    this.setState({ todos });
  };

  onLabelChange = event => this.setState({ label: event.target.value });
  onInputChange = value => this.setState({ text: value });
  onSearchChange = value => this.setState({ search: value });
  onRadioChange = event => this.setState({ selectedRadio: event.target.value });

  render() {
    const { label, text, search, todos, selectedRadio } = this.state;
    const todosKeys = queryFilter(todos, search, selectedRadio);

    return (
      <div>
        <AddTodoForm
          label={label}
          onLabelChange={this.onLabelChange}
          text={text}
          onInputChange={this.onInputChange}
          addTodo={this.addTodo}
        />
        <TextBox
          value={search}
          placeholder="Search..."
          onChange={this.onSearchChange}
        />
        <Radio selectedRadio={selectedRadio} onChange={this.onRadioChange} />
        <ul>
          {todosKeys.map(key => {
            return (
              <TodoItem
                id={key}
                key={key}
                todo={todos[key]}
                removeTodo={this.removeTodo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
