import React from "react";

const AddTask = ({ value, changeHandler }) => {
  return (
    <input
      type="text"
      onChange={changeHandler}
      value={value}
      placeholder="add new task..."
    />
  );
};

export default AddTask;
