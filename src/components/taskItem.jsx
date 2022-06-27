import React from "react";
import { useTaskStore } from "../store/TaskStore";
import { FaTimes } from "react-icons/fa";

function taskItem({ task }) {
  const tasks = useTaskStore((state) => state.tasks);
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <div className="task-items">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id}>
            <div className={`task-item ${task.taskReminder ? "reminded" : ""}`}>
              <div>
                <h4>{task.taskName}</h4>
                <p> {task.taskDate}</p>
              </div>

              <button
                className="deleteBtn"
                onClick={(e) => removeTask(task.id)}
              >
                <FaTimes style={{ color: "red" }} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <h5>No task to show.</h5>
      )}{" "}
      {tasks.length > 0 ? (
        <button onClick={saveAll} task={tasks} className="saveAllBtn">
          Save All ({tasks.length})
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default taskItem;
