import React from 'react';
import '../App.css';

class TodoItem extends React.Component {
  render() {
    return(
      <div className="todo-item">
        <input type="checkbox" onChange={() => this.handleChange(this.item.id)}/>
        <label>{this.item.text}</label>
      </div>
    )
  }
}
export default TodoItem;