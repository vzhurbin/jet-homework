import React from 'react';
import Todos from './Todos';

class TodoLlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
    };
    this.removeTodo = this.removeTodo.bind(this);
  }

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const value = this.state.text;
    const items = this.state.items;
    items.push(value);
    this.setState({ text: '', items: items });
  };

  removeTodo(name, i) {
    let items = this.state.items.slice();
    items.splice(i, 1);
    this.setState({ items });
  }

  render() {
    const text = this.state.text;
    const items = this.state.items;

    return (
      <div className="form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={text} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <Todos items={items} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default TodoLlist;
