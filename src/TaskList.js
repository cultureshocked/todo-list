import TaskListEntry from "./TaskListEntry";

export default function TaskList({ tasks, handleDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskListEntry task={task} handleDelete={handleDelete} key={task.id} />
      ))}
    </ul>
  );
}
