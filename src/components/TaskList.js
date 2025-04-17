import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskItems = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDelete={onDeleteTask}
    />
  ));

  
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category}           onDelete={onDeleteTask}
/>
      ))}
    </div>
  );
}

export default TaskList;
