import React, { Component } from "react";
import CompletedList from "./CompletedList";
export class CompletedTask extends Component {
  render() {
    return (
      <div>
        {this.props.completed.map((item) => (
          <div>
            <CompletedList
              key={item.id}
              item={item}
              markUncomplete={this.props.markUncomplete}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default CompletedTask;
