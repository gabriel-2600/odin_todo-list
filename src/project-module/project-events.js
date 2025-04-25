import { createProjectObject, deleteProjectObject } from "./project.js";
import { displayProjects } from "./project-DOM.js";
// import { currentProjectID } from "../index.js";

const projectDialog = document.querySelector(".project-dialog");

// Project Form Dialog Process
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

function showProjectFormDialog() {
  projectDialog.showModal();
}

// Delete Project
function deleteProjectAndDisplay(projectID) {
  deleteProjectObject(projectID);
  displayProjects();
}

export { showProjectFormDialog, deleteProjectAndDisplay };
