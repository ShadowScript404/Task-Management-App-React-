import React, { useState } from "react";

function EditTaskModal({ task, isOpen, onClose, onSave }) {
  const [editedText, setEditedText] = useState(task?.text || "");

  if (!isOpen) return null;
  const handleSave = () => {
    // trim ensures that there are no white spaces 
    if (editedText.trim()) {
      onSave(task.id, editedText);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <textarea
          className="w-full border p-2 rounded mb-4 dark:bg-gray-800 dark:text-gray-100"
          value={editedText}
          // updates the editedText state as the user types
          onChange={(e) => setEditedText(e.target.value)}
          rows={3}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
