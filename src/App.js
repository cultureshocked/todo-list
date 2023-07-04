import { useState } from "react";
import TaskList from "./TaskList";
import Button from "./Button.js";
import FormAddTask from "./FormAddTask";

const initialTasks = [
  { title: "Wake up", completed: true, id: 1 },
  { title: "Brush teeth", completed: false, id: 2 },
  { title: "Make coffee", completed: false, id: 3 },
];

export default function App() {
  const [tasks, setTasks] = useState([...initialTasks]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addTask = (task) => {
    setTasks((currentTasks) => {
      return [...currentTasks, task];
    });
    toggleForm();
  };
  const removeTask = (task) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((t) => t !== task);
    });
  };
  const clearTasks = () => {
    setTasks([]);
  };
  const toggleForm = () => {
    setIsFormOpen((isOpen) => !isOpen);
  };

  return (
    <div className="todo-list">
      <TaskList tasks={tasks} handleDelete={removeTask} />
      {isFormOpen ? <FormAddTask addTask={addTask} /> : null}
      <div className="controls">
        <Button handler={toggleForm} className="ui-button">
          {isFormOpen ? "Close" : "Add Task"}
        </Button>
        <Button handler={clearTasks} className="ui-button">
          Clear Task List
        </Button>
      </div>
    </div>
  );
}
