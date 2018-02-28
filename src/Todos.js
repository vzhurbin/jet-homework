import React from 'react';

class Todos extends React.Component {
  removeItem(item, i) {
    this.props.removeTodo(item, i);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return (
            <div className="todo-item" key={index}>
              <div>{item}</div>
              <button
                onClick={() => {
                  this.removeItem(item, index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Todos;
