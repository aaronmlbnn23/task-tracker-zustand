import React, { useEffect, useState} from "react";
import { useTaskStore } from "../store/TaskStore";
import { FaTimes } from "react-icons/fa";
import shallow from 'zustand/shallow'
import { useLocation } from 'react-router-dom'

const ManageTasks = () => {
  const savedtasks = useTaskStore((state) => (state.savedtasks), shallow);
  const deleteTask = useTaskStore((state) => state.deleteTask)
  const updateTask = useTaskStore((state) => state.updateTask)
  const deleteAll = useTaskStore((state) => state.deleteAll)
  /**const fetchTasks = async() => {
    const response = await fetch('http://localhost:3000/tasks')
    const data = await response.json()
    return data;
  } **/


  return (
    <div className="task-wrapper">
      {savedtasks.length > 0 ? (
        savedtasks.map((task) => (
          <div className="task-items" key={task.id}>
            <div className={`task-item ${task.taskReminder ? "reminded" : ""}`} onDoubleClick={() => updateTask(task.id)}>
              <div>
                <h4>{task.taskName}</h4>
                <p>{task.taskDate}</p>
              </div>
              <button className="deleteBtn" onClick={() => deleteTask(task.id)}>
                <FaTimes style={{ color: "red" }} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <h5>No task to show</h5>
      )}
     
        {location.pathname === '/manage-tasks' && (<button className="deleteAll" onClick={() => deleteAll()}>Delete All Task</button>)}
    </div>
  );
};

export default ManageTasks;
