import { useParams } from "react-router-dom";
import useTasks from "../context/useTasks";

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default TaskDetails;
