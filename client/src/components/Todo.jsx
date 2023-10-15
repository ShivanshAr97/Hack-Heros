import React, { useState } from "react";

const DailyFocusTodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    setTasks([...tasks, { text: "", completed: false, priority: "low" }]);
  };

  const handleTaskTextChange = (index, text) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = text;
    setTasks(updatedTasks);
  };

  const handlePriorityChange = (index, priority) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].priority = priority;
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl mb-4">Daily Focus Todo List</h1>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskChange(index)}
              className="mr-2"
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => handleTaskTextChange(index, e.target.value)}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
            <select
              value={task.priority}
              onChange={(e) => handlePriorityChange(index, e.target.value)}
              className="mr-2 p-2 border border-gray-300 rounded"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              onClick={() => handleRemoveTask(index)}
              className="p-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddTask}
        className="p-2 bg-green-500 text-white rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default DailyFocusTodoList;
