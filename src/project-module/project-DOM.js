import { defaultProject, projectList } from "./project";
import "./project-style.css";
import deletePNG from "./../assets/delete.png";

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

    const projectDeleteBtn = document.createElement("button");
    projectDeleteBtn.classList.add("delete-project-btn", "hide");

    const deleteBtnImage = document.createElement("img");
    deleteBtnImage.src = deletePNG;
    deleteBtnImage.width = "20";
    deleteBtnImage.height = "20";

    projectDeleteBtn.appendChild(deleteBtnImage);

    projectDiv.appendChild(createdProjectName);
    projectDiv.appendChild(projectDeleteBtn);

    projectListBar.appendChild(projectDiv);
  }
}

export { displayDefaultProject, displayProjects };
