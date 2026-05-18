import { useState, type FormEvent } from "react";

interface TaskFormProps {
  onSubmit: (title: string, description: string) => void;
  initialTitle?: string;
  initialDescription?: string;
}

const TaskForm = ({
  onSubmit,
  initialTitle = "",
  initialDescription = "",
}: TaskFormProps) => {
  return (
    <TaskFormFields
      key={`${initialTitle}::${initialDescription}`}
      onSubmit={onSubmit}
      initialTitle={initialTitle}
      initialDescription={initialDescription}
    />
  );
};

const TaskFormFields = ({
  onSubmit,
  initialTitle = "",
  initialDescription = "",
}: TaskFormProps) => {
  const [title, setTitle] = useState<string>(initialTitle);
  const [description, setDescription] = useState<string>(initialDescription);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError("Title is required");
      return;
    }

    setError("");
    onSubmit(trimmedTitle, description.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError("");
        }}
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
