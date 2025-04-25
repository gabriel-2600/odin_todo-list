// Project Module
import { getDefaultProjectID } from "./project-module/project.js";
import { displayDefaultProject } from "./project-module/project-DOM.js";
import {
  showProjectFormDialog,
  deleteProjectAndDisplay,
} from "./project-module/project-events.js";

// Todo Module
import { showTodoFormDialog } from "./todo-module/todo-events.js";
import { displayProjectTodoItems } from "./todo-module/todo-DOM.js";

// CSS Style
import "./styles.css";

// Initial Display (Default Project)
let currentProjectID;
function initialDisplay() {
  currentProjectID = getDefaultProjectID;

  displayDefaultProject();
  displayProjectTodoItems(currentProjectID);
}

const nav = document.querySelector("nav");
nav.addEventListener("click", (event) => {
  const addProjectBtn = event.target.classList.contains("add-project-btn");
  const projectContentDiv = event.target.closest(".project-content");
  const deleteProjectBtn = event.target.closest(".delete-project-container");

  // Add Project
  if (addProjectBtn) {
    showProjectFormDialog();
  }

  // Project Selected
  if (projectContentDiv) {
    const projectID = projectContentDiv.parentElement.dataset.id;
    currentProjectID = projectID;

    displayProjectTodoItems(currentProjectID);
  }

  // Delete Project
  if (deleteProjectBtn) {
    const projectID = deleteProjectBtn.parentElement.dataset.id;

    deleteProjectAndDisplay(projectID);
  }
});

// Add Task
const addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  showTodoFormDialog();
});

initialDisplay();
