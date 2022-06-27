import React, { useEffect } from "react";
import TaskForm from "../components/taskform";
import TaskItems from "../components/taskItem";
import ManageTasks from "./managetasks";
import { useTaskStore } from "../store/TaskStore";
import shallow from "zustand/shallow";
const home = () => {
  const save = useTaskStore((state) => state.saveTasks);
  const fetchTasks = useTaskStore((state) => state.fetchTasks);


  const saveTasks = async (task) => {
    await save(task);
    await fetchTasks();
  };

  return (
    <div>
      <TaskForm onAdd={saveTasks} />
      <ManageTasks />
    </div>
  );
};

export default home;
