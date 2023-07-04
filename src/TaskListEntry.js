import Button from "./Button";
import { useState } from "react";

export default function TaskListEntry({ task, handleDelete }) {
  const [isComplete, setIsComplete] = useState(task.completed);
  return (
    <li>
      <input
        type="checkbox"
        checked={isComplete}
        onClick={() => setIsComplete((curr) => !curr)}
      ></input>
      <p className={`${isComplete ? "completed" : ""}`}>{task.title}</p>{" "}
      <Button handler={() => handleDelete(task)} className="delete-task">
        ❌
      </Button>
    </li>
  );
}
