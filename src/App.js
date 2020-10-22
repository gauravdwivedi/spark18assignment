import React, { useState } from "react";
import logo from "./logo.svg";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, addTask] = useState([]);

  const addTasks = (event) => {
    addTask([
      ...tasks,
      {
        id: tasks.length,
        value: event.target.value,
      },
    ]);
    console.log(tasks);
  };

  return (
    <div className="App">
      <div>
        <input name="name" value={tasks.value} placeholder="Enter task" />
        <button onClick={addTasks}>Add Task</button>
        <div>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
