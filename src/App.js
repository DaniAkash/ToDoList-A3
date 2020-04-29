import React, { useState } from "react";
import Name from "./Component/Name";
import AddTask from "./Component/AddTask";

const App = () => {
  const [name] = useState("Dani");

  const [newTask, setNewTask] = useState("");

  // To change state -
  // User interaction
  // Side effect

  const onTextChange = event => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <Name name={name} />
      <AddTask value={newTask} changeHandler={onTextChange} />
    </div>
  );
};

export default App;
