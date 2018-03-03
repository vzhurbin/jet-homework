import React from "react";

export default class AddTodoForm extends React.Component {

  handleInputChange = event => {
    this.props.handleInputChange(event);
  }

  addTodo = event => {
    this.props.addTodo(event);
  }

  render() {
    const text = this.props.text;
    return (
      <form onSubmit={this.addTodo}>
        <select>
          <option value="med">Med</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
        <input
          type="text"
          value={text}
          placeholder='What to do?'
          onChange={this.handleInputChange}
        />
        <button>+ Add</button>
      </form>
    )
  }
}
