import React, { Component } from "react";

export class TodoItem extends Component {
  itemStyle = () => {
    return {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: ".5rem",
      padding: ".5rem",
      // color: this.props.todo.isCompleted ? "black" : "red",
      width: "30%",
      // textDecoration: this.props.todo.isCompleted ? "line-through" : "none",
      // backgroundColor: this.props.todo.isCompleted ? "tomato" : "cyan",
    };
  };
  render() {
    return (
      <div style={this.itemStyle()}>
        <div style={innerStyle}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, this.props.todo)}
          />
          <div>{this.props.todo.title} </div>
        </div>
        <button
          style={btnStyle}
          onClick={this.props.delTodo.bind(this, this.props.todo.id)}
        >
          x
        </button>
      </div>
    );
  }
}

const innerStyle = {
  display: "flex",
  flexDirection: "row",
};

const btnStyle = {
  color: "white",
  backgroundColor: "black",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  padding: ".5rem",
  float: "right",
  outlineStyle: "none",
};

export default TodoItem;
