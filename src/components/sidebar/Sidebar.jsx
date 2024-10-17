import Button from "../utility/Button";

export default function Sidebar({ onStartAdd, projects, onSelectProject, selectedProjectId }) {
  return (
    <div className="w-64 bg-black border-r border-gray-200">
      <h1 className="mx-6 mb-10 text-xl text-white uppercase tracking-widest mt-12">Your Projects</h1>
      <Button onClick={onStartAdd}>Add Project</Button>
      <ul className="list-none mt-6 px-6">
        {projects.map((project) => {
          let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-dark hover:bg-stone-200";
          if (project.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-dark";
          } else {
            cssClass += " text-stone-400";
          }
          return (
            <li className="mb-2" key={project.id}>
              <button className={cssClass} onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
