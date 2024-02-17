import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filteredTasks, setFilteredTasks]=useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const handleTaskFormSubmit = (newTask) => {
    setFilteredTasks([...filteredTasks, newTask]);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setFilteredTasks(category === 'All' ? TASKS : TASKS.filter((task) => task.category === category));
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...filteredTasks];
    updatedTasks.splice(index, 1);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        setFilteredTasks={setFilteredTasks}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={TASKS} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
