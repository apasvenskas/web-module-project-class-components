import React from 'react'
import { boolean } from 'yup';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
  return(
    <ul>
    {
      this.props.todos.map(todo => {
        // adding task comple to the todo.task 
        return (<Todo todo={todo}/>)
      })
    }
    {/* // <li>Study</li>
    // <li>Go to the gym</li>
    // <li>Cleaning home</li> */}
  </ul>);
  }
}

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          task: 'Study',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Clean Home',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Go to the gym',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  
  render() { 
    const { todos } = this.state;
    
    return (
      <div>
        <h1>To Do's</h1>
        <TodoList todos={todos}/>
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
