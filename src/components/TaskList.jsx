import React, { useState } from "react";
import TaskItem from "./TaskItem";
import FilterBar from "./FilterBar";
import EditTaskModal from "./EditTaskModal";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editTask, setEditTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // this arrow function adds a new task 
  const addTask = () => {
    // here the trim ensures that the inout is not empty(removes whitespaces)
    if (newTask.trim()) {
      // the setTasks updates the tasks by creating a new array that includes all previous tasks
      // (...tasks) it add a new task object
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // deletes the taks by the id with the help of filter method 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

// this .map iterates tho=rough eacg tasks array and processes each task 
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // this handles the edit of a task
  const handleEdit = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const handleInputResize = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto"; 
    textarea.style.height = `${textarea.scrollHeight}px`;
    setNewTask(textarea.value);
  };


  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );

  return (
    <div className="max-w-lg mx-auto p-8 bg-teal-300 rounded-xl shadow-xl">
      <div className="flex flex-col gap-6 mb-8">
        <textarea
          placeholder="Add a new task..."
          className="border-2 border-gray-400 rounded-lg p-4 w-full text-lg text-black bg-black-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-300 resize-none overflow-hidden shadow-xl"
          value={newTask}
          onChange={handleInputResize}
          rows={1}
        />
        <button
          onClick={addTask}
          className="bg-teal-800 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg transition-transform transform active:scale-95"
        >
          Add Task
        </button>
      </div>
      {/* that allows users to set the filter state to all, completed, incomplete */}
      <FilterBar filter={filter} setFilter={setFilter} />

      <div className="space-y-6 mt-6">
        {filteredTasks.map((task) => (
          // TaskItem component is rendered.
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
            setEditTask={setEditTask}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>
      {/* EditTaskModal is a rendered component */}
      <EditTaskModal
        task={editTask}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleEdit}
      />
    </div>
  );
}

export default TaskList;
