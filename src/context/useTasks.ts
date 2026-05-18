import { useContext } from "react";
import { TaskContext } from "./TaskContextValue";

const useTasks = () => {
  const context = useContext(TaskContext);

  if (context === null) {
    throw new Error("useTasks must be used inside TaskProvider");
  }

  return context;
};

export default useTasks;
