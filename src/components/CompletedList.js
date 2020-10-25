import React, { Component } from "react";

export class CompletedList extends Component {
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
    console.log(this.props.item);
    return (
      <div style={this.itemStyle()}>
        <div style={innerStyle}>
          <input
            type="checkbox"
            onChange={this.props.markUncomplete.bind(this, this.props.item)}
          />

          <div>{this.props.item.title} </div>
        </div>
      </div>
    );
  }
}

const innerStyle = {
  display: "flex",
  flexDirection: "row",
};

export default CompletedList;
