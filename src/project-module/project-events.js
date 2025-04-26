import { createProjectObject, deleteProjectObject } from "./project.js";
import { displayProjects } from "./project-DOM.js";

const projectDialog = document.querySelector(".project-dialog");

// Project Form Dialog Process
const projectForm = document.querySelector(".project-form");
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const projectNameInput = document.querySelector("#project-name");
  const projectNameValue = projectNameInput.value;

  createProjectObject(projectNameValue);
  displayProjects();

  projectNameInput.value = "";
  projectDialog.close();
});

const closeProjectDialogBtn = document.querySelector(".project-cancel-btn");
closeProjectDialogBtn.addEventListener("click", () => {
  projectDialog.close();
});

function showProjectFormDialog() {
  projectDialog.showModal();
}

// Delete Project
function deleteProjectAndUpdateNav(projectID) {
  deleteProjectObject(projectID);
  displayProjects();
}

export { showProjectFormDialog, deleteProjectAndUpdateNav };
