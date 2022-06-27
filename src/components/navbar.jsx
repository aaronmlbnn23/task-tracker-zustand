import { NavLink, Link } from "react-router-dom";
import { VscTasklist, VscHome } from "react-icons/vsc";
import { useTaskStore } from "../store/TaskStore";
import { useEffect } from "react";


const navbar = () => {
  const fetchTasks = useTaskStore((state) => state.fetchTasks)
  const numberOfTasks = useTaskStore((state) => state.numberOfTasks);
  const countTask = useTaskStore((state) => state.countTask)
  return (
    <div className="navbar">
      <div className="title">Task Tracker</div>
      <div className="link-wrapper">
        <Link className="nav-link" as={NavLink} to="/home">
          <VscHome className="nav-icon" />
        </Link>
        <Link className="nav-link" as={NavLink} to="/manage-tasks">
          <VscTasklist className="nav-icon" />
          <span className="numberOfTask">{numberOfTasks}</span>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
