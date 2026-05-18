import { useState } from "react";
import type { FormEvent } from "react";
import useTasks from "../context/useTasks";

const CreateTask = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    addTask({
      id: Date.now(),
      title,
      description,
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
    });
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Task</h1>

      {error && <p>{error}</p>}

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

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTask;
