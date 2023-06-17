import React from 'react'
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
  return(
    <ul>
    {
      this.props.todos.map(todo => {
        // adding task comple to the todo.task 
        return (<Todo key={todo.id} handleToggle={this.props.handleToggle} todo={todo}/>)
      })
    }
    {/* // <li>Study</li>
    // <li>Go to the gym</li>
    // <li>Cleaning home</li> */}
  </ul>);
  }
}

export default TodoList;
