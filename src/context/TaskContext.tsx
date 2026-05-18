import { useState } from "react";
import type { ReactNode } from "react";
import type { Task } from "../types/task";
import { TaskContext } from "./TaskContextValue";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
