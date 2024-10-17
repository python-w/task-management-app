import NewTasks from "../utility/NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <>
      <h1 className="inline-flex text-gray-900 text-xl items-center font-bold">Tasks</h1>
      <NewTasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {tasks.length === 0 && <p className="text-base">This Project doesn't have tasks yet.</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(task.id)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
