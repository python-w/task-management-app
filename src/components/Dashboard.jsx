import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import AddProject from "./utility/AddProject";
import NoProjectSelected from "./utility/NoProjectSelected";
import SelectedProject from "./utility/SelectedProject";

export default function dashboard() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prevProjectState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProjectState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevProjectState,
        tasks: [newTask, ...prevProjectState.tasks],
      };
    });
  };
  const handleDeleteTask = (id) => {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevProjectState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: [...prevProjectState.projects, newProject],
      };
    });
  };

  const handleSelectedProject = (id) => {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: id,
      };
    });
  };

  const handleCancelProject = () => {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter((project) => project.id !== prevProjectState.selectedProjectId),
      };
    });
  };

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />;

  if (projectsState.selectedProjectId === null) {
    content = <AddProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAdd={handleStartAddProject} />;
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar onStartAdd={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectedProject} selectedProjectId={projectsState.selectedProjectId} />
      <main className="w-full">{content}</main>
    </div>
  );
}
