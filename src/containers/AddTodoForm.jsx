import React from "react";
import SelectBox from '../components/SelectBox';
import TextBox from '../components/TextBox';

export default class AddTodoForm extends React.Component {
  render() {
    const text = this.props.text;
    const label = this.props.label;
    return (
      <form onSubmit={e => this.props.addTodo(e)}>
        <SelectBox
          label={label}
          onChange={e => this.props.onLabelChange(e)}
        />
        <TextBox
          value={text}
          placeholder='What to do?'
          onChange={e => this.props.onInputChange(e)}
          autoFocus
        />
        <button>+ Add</button>
      </form>
    )
  }
}
