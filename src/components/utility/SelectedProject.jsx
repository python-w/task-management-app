import Button from "./Button";
import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="flex flex-col pl-12 pr-40 mt-40">
      <div className="flex-1 py-3 bg-gray-50 space-x-6">
        <h1 className="inline-flex text-gray-900 text-xl items-center font-bold">
          {project.title} <span>{formattedDate}</span>
        </h1>
        <Button onClick={onDelete}>Delete</Button>
      </div>
      <div className="flex-1">
        <p className="text-sm mb-4">Learn React from the group up.</p>
        <p className="text-sm mb-4 border-b-2 pb-8 whitespace-pre-wrap">{project.description}</p>
        <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
      </div>
    </div>
  );
}
