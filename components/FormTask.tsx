import { useState } from "react";

interface TaskFormProps {
  onSubmit: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="border rounded px-3 py-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
