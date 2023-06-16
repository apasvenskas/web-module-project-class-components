import React from 'react'
import { boolean } from 'yup';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      id: '',
      completed: boolean
    };
  }
  
  render() {

    return (
      <div>
        <h1>To Do's</h1>
        <ul>
          <li>Study</li>
          <li>Go to the gym</li>
          <li>Cleaning home</li>
        </ul>
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
