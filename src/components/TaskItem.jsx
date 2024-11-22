import React from "react";

function TaskItem({ task, deleteTask, toggleCompletion, setEditTask, setIsModalOpen }) {
  return (
    // if the task is completed then the background id green else its white 
    <div
      className={`flex justify-between items-center p-2 mb-2 border rounded ${
        task.completed ? "bg-green-300" : "bg-white"
      }`}
    >
      {/* the checkbox is checked if the task is completed; when you click on the checkbox it triggers the togglecompletion function with the task id to change its status */}
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? "line-through" : ""}>{task.text}</span>
      </div>

      {/* opens the modal for editing the task*/}
      <div className="flex gap-2">
        <button
          onClick={() => {
            setEditTask(task);
            setIsModalOpen(true);
          }}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        {/* it calls the deleteTask function with the task.id to remove it from the list */}
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
