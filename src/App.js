import React, { useState } from "react";
import Name from "./Component/Name";
import AddTask from "./Component/AddTask";

const App = () => {
  const [name] = useState("Dani");

  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState([
    {
      text: "Buy Grocery",
      isComplete: false,
    },
    {
      text: "Car wash",
      isComplete: false,
    },
  ]);

  // To change state -
  // User interaction
  // Side effect

  const onTextChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        text: newTask,
        isComplete: false,
      },
    ]);
    setNewTask("");
  };

  return (
    <div>
      <Name name={name} />
      <AddTask value={newTask} changeHandler={onTextChange} addTask={addTask} />
      <ul>
        {tasks.map((task, taskIndex) => {
          return <li key={taskIndex}>{task.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
