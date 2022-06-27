import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/TaskStore";
import { FaTimes } from "react-icons/fa";
import shallow from 'zustand/shallow'

const ManageTasks = () => {
  const savedtasks = useTaskStore((state) => (state.savedtasks), shallow);
  /**const fetchTasks = async() => {
    const response = await fetch('http://localhost:3000/tasks')
    const data = await response.json()
    return data;
  } **/
  return (
    <>
      {savedtasks.length > 0 ? (
        savedtasks.map((task) => (
          <div className="task-items" key={task.id}>
            <div className={`task-item ${task.taskReminder ? "reminded" : ""}`}>
              <div>
                <h4>{task.taskName}</h4>
                <p>{task.taskDate}</p>
              </div>
              <button className="deleteBtn">
                <FaTimes style={{ color: "red" }} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <h5>No task to show</h5>
      )}
    </>
  );
};

export default ManageTasks;
