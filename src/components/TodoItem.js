import React from 'react';
import '../App.css';

function TodoItem(props) {
  return(
    <div className="todo-item">
      <input type="checkbox"/>
      <label>{props.item.text}</label>
    </div>
  )
}

export default TodoItem;