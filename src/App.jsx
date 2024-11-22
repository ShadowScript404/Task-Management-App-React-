import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

// creates a function App and Initialize the state variable wioth the default value of flase
function App() {
  const [darkMode, setDarkMode] = useState(false);

// this effects runs whenever the darkMode state changes 
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-normal">Task Management App</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
