import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";
import { useTasks } from "../context/useTasks";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { tasks, updateTask } = useTasks();

  const task = tasks.find((task) => task.id === Number(id));

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!task) return;

    updateTask({
      ...task,
      title,
      description,
    });
    navigate("/");
  };

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Task</h1>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default EditTask;
