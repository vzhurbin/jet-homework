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
    // const id = this.props.id;
    console.log(id);
    // console.log(todos[id]);
    delete todos[id];
    this.setState({ todos });
  }

  // removeTodoHandler = id => {
  //   const todos = this.props.onClick;
  //   this.setState(todos);
  // }
  
  editTodo = key => {
    const todos = { ...this.state.todos };  
    todos[key]['isEdited'] = true;
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
                // todos={todosObj}
                todo={todosObj[key]}
                // isEdited={todosObj[key]['isEdited']}
                removeTodo={this.removeTodo}
                editTodo={this.editTodo}
                saveEdit={this.saveEdit}
              />
            );
          })}
        </ul>
      </div>
    )
  }

}
