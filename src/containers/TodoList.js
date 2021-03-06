import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from '../containers';
import { TextBox, Radio } from '../components';
import queryFilter from '../helpers';

const propTypes = {
  onRemoveTodo: PropTypes.func,
  onSaveEdit: PropTypes.func,
  todos: PropTypes.object
};

class TodoList extends React.Component {
  state = {
    search: '',
    selectedRadio: ''
  };

  onSearchChange = e => this.setState({ search: e.target.value });

  onRadioChange = e => {
    const value = e.target.value;
    this.setState({ selectedRadio: value });
  };

  render() {
    const { search, selectedRadio } = this.state;
    const { todos, onRemoveTodo, onSaveEdit } = this.props;
    const todosKeys = queryFilter(todos, search, selectedRadio);

    return (
      <div>
        <TextBox
          value={search}
          placeholder="Search..."
          onChange={this.onSearchChange}
        />
        <Radio selectedRadio={selectedRadio} onChange={this.onRadioChange} />
        <ul>
          {todosKeys.map(key => {
            return (
              <TodoListItem
                id={key}
                key={key}
                todo={todos[key]}
                onRemoveTodo={onRemoveTodo}
                onSaveEdit={onSaveEdit}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;
