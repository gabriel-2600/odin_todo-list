import { createProjectObject } from "./project.js";
import { displayProjects } from "./project-DOM.js";

const projectDialog = document.querySelector(".project-dialog");

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

function showProjectFormDialog() {
  projectDialog.showModal();
}

const closeProjectDialogBtn = document.querySelector(".project-cancel-btn");
closeProjectDialogBtn.addEventListener("click", () => {
  projectNameInput.value = "";
  projectDialog.close();
});

export { showProjectFormDialog };
