import { defaultProject, projectList } from "./project";
import "./project-style.css";

function displayDefaultProject() {
  const defaultTodoContainer = document.querySelector(
    ".default-todo-container"
  );
  defaultTodoContainer.dataset.id = defaultProject.id;

  const defaultProjectName = document.createElement("h3");
  defaultProjectName.textContent = defaultProject.projectName;

  defaultTodoContainer.appendChild(defaultProjectName);
}

function displayProjects() {
  const projectListBar = document.querySelector(".project-list-bar");
  projectListBar.innerHTML = "";

  for (let i = 0; i < projectList.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.dataset.id = `${projectList[i].id}`;
    projectDiv.classList.add("project");

    const createdProjectName = document.createElement("h3");
    createdProjectName.textContent = projectList[i].projectName;

    projectDiv.appendChild(createdProjectName);

    projectListBar.appendChild(projectDiv);
  }
}

export { displayDefaultProject, displayProjects };
