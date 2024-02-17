import React from "react";
import Task from "./Task";

function TaskList({ tasks,  onDeleteTask }) {


  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task 
          key={task.id || task.text} 
          task={task} 
          onDeleteTask={() => onDeleteTask(task.id || task.text)} 
        />
      ))}
    </div>
  );
}

export default TaskList;
