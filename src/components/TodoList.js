import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import '../App.css';

function TodoItems() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

  return(
    <div className="todo-list App">
      {todoItems}
    </div>
  )
}

export default TodoItems;