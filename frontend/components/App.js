import React from "react";
import { boolean } from "yup";
import TodoList from "./TodoList";
import TodoForm from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false,
        },
        {
          task: "Study",
          id: 1528817084333,
          completed: false,
        },
        {
          task: "Clean Home",
          id: 1528817084322,
          completed: false,
        },
        {
          task: "Go to the gym",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }
  // changes in data
  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    // 1 setState, 2 change todos, 3 make tdos copy, 4 add a new tdo to the end
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };
  // 1 set state, 2 loop through all todos, 3 remove all todos that have completed, 4 save filtered todos to state.
  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  handleToggle = (clickedId) => {
    // 1 set state, 2 change todos, 3 find the todo clicked on, 4 flip the value, 5 keep all other todos the same
   // const clickedId = 1528817084358;
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>To Do's</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />

        <TodoForm handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
