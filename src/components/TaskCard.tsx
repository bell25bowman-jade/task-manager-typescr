import { Link } from "react-router-dom";
import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskCard = ({ task, onDelete }: TaskCardProps) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <p>Status: {task.completed ? "Completed" : "Pending"}</p>

      <Link to={`/task/${task.id}`}>Details</Link>

      <Link to={`/edit/${task.id}`}>Edit</Link>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
