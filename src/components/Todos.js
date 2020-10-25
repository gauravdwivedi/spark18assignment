import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  render() {
    const todos = this.props.todos;

    console.log(todos);
    return (
      <div className="todo-container">
        This is Todos LIST:
        {todos.map((todo) => (
          <div>
            <TodoItem
              key={todo.id}
              todo={todo}
              markComplete={this.props.markComplete}
              delTodo={this.props.del}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Todos;
