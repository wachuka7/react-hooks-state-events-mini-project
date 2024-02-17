import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [taskFormData, setTaskFormData] = useState({
    text: '',
    category: categories[0], 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskFormData({
      ...taskFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(taskFormData);
    setTaskFormData({
      text: '',
      category: categories[0],
    });
  };
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          id="text"
          name="text" 
          value={taskFormData.text} 
          onChange={handleInputChange} 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={taskFormData.category} 
          onChange={handleInputChange}
        >
          {categories.slice(1).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
