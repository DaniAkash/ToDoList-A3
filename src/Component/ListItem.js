import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ text, isCompleted, onClickCheckbox }) => {
  return (
    <li
      style={{
        textDecorationLine: isCompleted ? "line-through" : "none",
      }}
    >
      <input onChange={onClickCheckbox} type="checkbox" checked={isCompleted} />
      {text}
    </li>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onClickCheckbox: PropTypes.func.isRequired,
};

export default ListItem;
