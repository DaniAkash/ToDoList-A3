import React from "react";
import PropTypes from "prop-types";

// Pure Function
// Dumb components
const AddTask = ({ value, changeHandler, addTask, reference }) => {
  return (
    <>
      <input
        ref={reference}
        type="text"
        onChange={changeHandler}
        value={value}
        placeholder="add new task..."
      />
      <button onClick={addTask}>Add</button>
    </>
  );
};

AddTask.propTypes = {
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  reference: PropTypes.object.isRequired,
};

export default AddTask;
