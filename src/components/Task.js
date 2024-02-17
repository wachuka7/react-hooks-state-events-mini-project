import React from "react";

function Task({ task, onDeleteTask }) {
  return (
    <div>
      <p>{task.text}</p>
      <p>{task.category}</p>
      <button onClick={onDeleteTask}>Delete</button>
    </div>
  );
}

export default Task;
