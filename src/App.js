import React, { Component } from "react";
import CompletedTask from "./components/CompletedTask";
import Todos from "./components/Todos";

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Work 1",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Work 2",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Work 3",
        isCompleted: false,
      },
      {
        id: 4,
        title: "Work 4",
        isCompleted: false,
      },
      {
        id: 5,
        title: "Work 5",
        isCompleted: false,
      },
    ],

    completed: [
      {
        id: 6,
        title: "waste Time",
        isCompleted: true,
      },
    ],
  };

  markUncomplete = (item) => {
    this.setState({
      todos: [...this.state.todos, item],
      completed: [
        ...this.state.completed.filter((todo) => todo.id !== item.id),
      ],
    });
  };

  markComplete = (item) => {
    this.setState({
      completed: [...this.state.completed, item],
      todos: [...this.state.todos.filter((todo) => todo.id !== item.id)],
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
    console.log("Delete ");
  };
  render() {
    console.log("Rendered");
    return (
      <div style={{ display: "flex" }}>
        <Todos
          del={this.delTodo}
          todos={this.state.todos}
          markComplete={this.markComplete}
        />
        <div>
          This is COmpleted Tasks 
          <CompletedTask
            completed={this.state.completed}
            markUncomplete={this.markUncomplete}
          />
        </div>
      </div>
    );
  }
}

export default App;
