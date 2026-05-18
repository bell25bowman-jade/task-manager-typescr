import { createContext } from "react";
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
