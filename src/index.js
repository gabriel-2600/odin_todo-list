// Project Module
import { getDefaultProjectID } from "./project-module/project.js";
import { displayDefaultProject } from "./project-module/project-DOM.js";
import {
  showProjectFormDialog,
  deleteProjectAndUpdateNav,
} from "./project-module/project-events.js";

// Todo Module
import {
  showTodoFormDialog,
  setCurrentProjectID,
} from "./todo-module/todo-events.js";
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

// Nav Bar Event Listeners
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
    deleteProjectAndUpdateNav(projectID);

    if (projectID === currentProjectID) {
      currentProjectID = getDefaultProjectID;
      displayProjectTodoItems(currentProjectID);
    }
  }
});

// Add Todo per Project
const addTodoBtn = document.querySelector(".add-todo-btn");
addTodoBtn.addEventListener("click", () => {
  setCurrentProjectID(currentProjectID);
  showTodoFormDialog();
});

initialDisplay();
