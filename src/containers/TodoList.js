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

  render() {
    const { label, text, search, todos, selectedRadio } = this.state;
    const todosKeys = queryFilter(todos, search, selectedRadio);

    return (
      <div>
        <AddTodoForm
          label={label}
          onLabelChange={e => this.setState({ label: e.target.value })}
          text={text}
          onInputChange={value => this.setState({ text: value })}
          addTodo={this.addTodo}
        />
        <TextBox
          value={search}
          placeholder="Search..."
          onChange={value => this.setState({ search: value })}
        />
        <Radio
          selectedRadio={selectedRadio}
          onChange={e => this.setState({ selectedRadio: e.target.value })}
        />
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
