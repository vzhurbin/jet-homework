import React from "react";
import SelectBox from '../components/SelectBox';

export default class AddTodoForm extends React.Component {

  handleInputChange = event => {
    this.props.onInputChange(event);
  }

  handleLabelChange = event => {
    this.props.onLabelChange(event);
  }

  handleAddTodo = event => {
    this.props.addTodo(event);
  }

  render() {
    const text = this.props.text;
    const label = this.props.label;
    return (
      <form onSubmit={this.handleAddTodo}>
        <SelectBox
          value={label}
          onChange={this.handleLabelChange}
        />
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
