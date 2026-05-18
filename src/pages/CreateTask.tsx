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
      <h2>Create Task</h2>
      {error && <p className="error">{error}</p>}

      <div>
        <label htmlFor="task-title">Task Title</label>
        <input
          id="task-title"
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="task-description">Task Description</label>
        <textarea
          id="task-description"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTask;
