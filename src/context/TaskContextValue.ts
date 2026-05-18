import { createContext, useContext } from "react";
import type { Task } from "../types/task";

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  updateTask: (updatedTask: Task) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined,
);

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used inside TaskProvider");
  }
  return context;
}
