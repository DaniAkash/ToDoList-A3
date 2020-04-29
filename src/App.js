import React, { useState } from "react";
import Name from "./Component/Name";
import AddTask from "./Component/AddTask";
import ListItem from "./Component/ListItem";

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

  const toggleTask = (taskIndex) => {
    console.log(taskIndex);
  };

  return (
    <div>
      <Name name={name} />
      <AddTask value={newTask} changeHandler={onTextChange} addTask={addTask} />
      <ul>
        {tasks.map((task, taskIndex) => {
          const onTaskClick = () => toggleTask(taskIndex);

          return (
            <ListItem
              key={taskIndex}
              text={task.text}
              isCompleted={task.isComplete}
              onClickCheckbox={onTaskClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
