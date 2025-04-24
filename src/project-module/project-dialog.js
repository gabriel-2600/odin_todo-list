import { createProjectObject } from "./project.js";
import { displayProjects } from "./project-DOM.js";

function projectCreation() {
  const projectDialog = document.querySelector(".project-dialog");

  const addProjectBtn = document.querySelector(".add-project-btn");
  addProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
  });

  const projectForm = document.querySelector(".project-form");
  const projectNameInput = document.querySelector("#project-name");
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectName = projectNameInput.value;
    createProjectObject(projectName);
    displayProjects();
    projectNameInput.value = "";
    projectDialog.close();
  });

  const closeProjectDialogBtn = document.querySelector(".project-cancel-btn");
  closeProjectDialogBtn.addEventListener("click", () => {
    projectDialog.close();
  });
}

export { projectCreation };
