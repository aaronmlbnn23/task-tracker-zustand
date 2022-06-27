import create from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create((set, get) => ({
  /*states*/
  bears: 0,
  tasks: [],
  savedtasks: [],
  numberOfTasks: 0,
  /* functions */

  countTask: (data) =>
    set((state) => ({ numberOfTasks: (state.numberOfTasks = data) })),
  removeAllBears: () => set({ bears: 0 }),

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

  setTasks: (data) => set({ savedtasks: data }),

  fetch: async (task) => {
    const response = await fetch(task);
    set({ savedtasks: await response.json() });
  },

 

  fetchTasks: async () => {
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()
      set({ savedtasks: data})
      set((state) => ({ numberOfTasks: data.length }))
  },


  saveTasks: async (task) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data)
    set((state) => ({
      savedtasks: [...state.savedtasks, { id: data.id, taskName: data.taskName, taskDate: data.taskDate, taskReminder: data.taskReminder }],
      numberOfTasks: state.numberOfTasks + 1,
    }));
  },
}));
