import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const filteredTasks = filteredCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === filteredCategory);

    function handleAddTask(newTask) {
      setTasks([...tasks, newTask]);
    }
  
    function handleDeleteTask(deletedTaskText) {
      const updatedTasks = tasks.filter((task) => task.text !== deletedTaskText);
      setTasks(updatedTasks);
    }
  
    function handleCategoryFilter(category) {
      setFilteredCategory(category);
    }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={filteredCategory}
        onSelectCategory={handleCategoryFilter}
        />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} 
      onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
