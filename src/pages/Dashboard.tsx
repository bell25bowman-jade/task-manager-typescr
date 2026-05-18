import { Link } from "react-router-dom";
import { useTasks } from "../context/useTasks";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <h1>Task Dashboard</h1>

      <Link to="/create">Create Task</Link>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default Dashboard;
