import React, {Component} from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import '../App.css';

class TodoItems extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render() {
  const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)

    return(
      <div className="todo-list App">
        {todoItems}
      </div>
    )
  }
}
export default TodoItems;