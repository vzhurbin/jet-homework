import React from "react";
import SelectBox from '../components/SelectBox';

export default class AddTodoForm extends React.Component {
  render() {
    const text = this.props.text;
    const label = this.props.label;
    return (
      <form onSubmit={e => this.props.addTodo(e)}>
        <SelectBox
          value={label}
          onChange={e => this.props.onEditLabel(e)}
        />
        <input
          type="text"
          value={text}
          placeholder='What to do?'
          autoFocus
          onChange={e => this.props.onFormInputChange(e)}
        />
        <button>+ Add</button>
      </form>
    )
  }
}
