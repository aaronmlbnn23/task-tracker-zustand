import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ManageTasks from "./pages/managetasks";
import Navbar from "./components/navbar";
import Services from "./pages/services";
import Contact from "./pages/contact";
import TaskForm from "./components/taskform";
import TaskItems from "./components/taskItem";
import { useTaskStore } from './store/TaskStore'


function App() {
  const fetchTasks = useTaskStore((state)=> state.fetchTasks)
  const savedtasks = useTaskStore((state)=> state.savedtasks)
  const [tasks, settasks] = useState([]);
  const updateGlobalTasks = useTaskStore((state) => state.setTasks)

  useEffect(()=> {
    fetchTasks()
  }, [])

  return (
    <>
      <BrowserRouter>
        <div className="main-wrapper">
          <div className="task-manager">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/manage-tasks" element={<ManageTasks />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
