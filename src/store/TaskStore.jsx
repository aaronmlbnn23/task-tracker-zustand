import create from "zustand";

export const useTaskStore = create((set, get) => ({
  /*states*/
  savedtasks: [],
  numberOfTasks: 0,
  /* functions */

  /*
  addTask: (task) =>
    set((state) => ({
      tasks: [
        {
          id: Math.random() * 100,
          title: task.title,
          date: task.date,
          reminder: task.reminder,
        },
        ...state.tasks,
      ],
    })),

  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  */

   /** fetch specific task */ 
  fetch: async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();
    return data;
  },
  /** fetch all tasks */
  fetchTasks: async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    set({ savedtasks: data });
    set((state) => ({ numberOfTasks: data.length }));
  },

  /** update task */
  updateTask: async (id) => {
    const toggleTask = await get().fetch(id);
    const updatedReminder = {
      ...toggleTask,
      taskReminder: !toggleTask.taskReminder,
    };

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedReminder),
    });
    const data = await res.json();

    set((state) => ({
      savedtasks: state.savedtasks.map((task) =>
        task.id === id ? { ...task, taskReminder: data.taskReminder } : task
      ),
    }));
  },

  /** delete task */
  deleteTask: async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? set((state) => ({
          savedtasks: state.savedtasks.filter((tasks) => tasks.id !== id),
        }))
      : alert("Error delete!");
    set((state) => ({ numberOfTasks: state.numberOfTasks - 1 }));
  },
/**
  deleteAll: async () => {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'DELETE',
      headers: {
        'Content-type' : 'application/json  '
      }
    }) 
    const data = await res.json();
    console.log(data)
  }, */

  /** add task */
  saveTasks: async (task) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
    set((state) => ({
      savedtasks: [
        ...state.savedtasks,
        {
          id: data.id,
          taskName: data.taskName,
          taskDate: data.taskDate,
          taskReminder: data.taskReminder,
        },
      ],
      numberOfTasks: state.numberOfTasks + 1,
    }));
  },
}));
