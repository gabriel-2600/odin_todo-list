// import { defaultProject, projectList } from "./project";
import { getToLocalStorage } from "./project";
import "./project-style.css";
import deletePNG from "./../assets/delete.png";

function displayDefaultProject() {
  const projectList = getToLocalStorage();

  const defaultTodoContainer = document.querySelector(
    ".default-todo-container"
  );
  defaultTodoContainer.innerHTML = "";

  defaultTodoContainer.dataset.id = projectList[0].id;

  const defaultProjectName = document.createElement("h3");
  defaultProjectName.textContent = projectList[0].projectName;

  const projectContent = document.createElement("div");
  projectContent.classList.add("project-content");
  projectContent.appendChild(defaultProjectName);

  defaultTodoContainer.appendChild(projectContent);
}

function displayProjects() {
  const projectList = getToLocalStorage();

  const projectListBar = document.querySelector(".project-list-bar");
  projectListBar.innerHTML = "";

  //  i set to 1 to avoid default project,
  //  since default project is the first value in the project list array
  for (let i = 1; i < projectList.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.dataset.id = `${projectList[i].id}`;
    projectDiv.classList.add("project");

    const createdProjectName = document.createElement("h3");
    createdProjectName.textContent = projectList[i].projectName;

    const projectContent = document.createElement("div");
    projectContent.classList.add("project-content");
    projectContent.appendChild(createdProjectName);

    const deleteBtnImage = document.createElement("img");
    deleteBtnImage.src = deletePNG;
    deleteBtnImage.width = "20";
    deleteBtnImage.height = "20";

    const deleteProjectContainer = document.createElement("div");
    deleteProjectContainer.classList.add("delete-project-container");
    deleteProjectContainer.appendChild(deleteBtnImage);

    projectDiv.appendChild(projectContent);
    projectDiv.appendChild(deleteProjectContainer);

    projectListBar.appendChild(projectDiv);
  }
}

export { displayDefaultProject, displayProjects };
