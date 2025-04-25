import { createProjectObject, deleteProjectObject } from "./project.js";
import { displayProjects } from "./project-DOM.js";

// Add Project Form Dialog
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

const closeProjectDialogBtn = document.querySelector(".project-cancel-btn");
closeProjectDialogBtn.addEventListener("click", () => {
  projectNameInput.value = "";
  projectDialog.close();
});

function showProjectFormDialog() {
  projectDialog.showModal();
}

// Delete Project
function deleteProjectAndDisplay(projectID) {
  deleteProjectObject(projectID);
  displayProjects();
}

export { showProjectFormDialog, deleteProjectAndDisplay };
