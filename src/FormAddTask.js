import { useState } from "react";
import Button from "./Button";

export default function FormAddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName === "") return;
    const newTask = {
      title: taskName,
      id: Date.now(),
      completed: false,
    };
    addTask(newTask);
  };
  return (
    <form className="form-add-task">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name..."
        className="text-input"
      />
      <Button handler={handleSubmit} className="ui-button">
        Create New Task
      </Button>
    </form>
  );
}
