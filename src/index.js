// Project Module
import { getDefaultProjectID } from "./project-module/project.js";
import {
  displayDefaultProject,
  displayProjects,
} from "./project-module/project-DOM.js";
import {
  showProjectFormDialog,
  deleteProjectAndUpdateNav,
} from "./project-module/project-events.js";

// Todo Module
import {
  showTodoFormDialog,
  setCurrentProjectID,
  deleteTodoAndUpdateDisplay,
  openTodoInfoDialog,
  updateIsDoneAndDisplay,
} from "./todo-module/todo-events.js";
import { displayProjectTodoItems } from "./todo-module/todo-DOM.js";
import { showEditTodoFormDialog } from "./todo-module/edit-todo.js";

// CSS Style
import "./styles.css";

// Initial Display (Default Project)
let currentProjectID;

function initialDisplay() {
  currentProjectID = getDefaultProjectID;

  displayDefaultProject();
  displayProjects();
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

// Add Todo
const addTodoBtn = document.querySelector(".add-todo-btn");
addTodoBtn.addEventListener("click", () => {
  setCurrentProjectID(currentProjectID);
  showTodoFormDialog();
});

// Todo Container Event Listeners
const todoContainer = document.querySelector(".todo-container");
todoContainer.addEventListener("click", (event) => {
  const todoItem = event.target.closest(".todo-item-content");
  const isDoneCheckBox = event.target.closest(".todo-checkbox");
  const deleteTodoImg = event.target.closest(".delete-todo-img");
  const editTodoImg = event.target.closest(".edit-todo-img");

  if (todoItem) {
    const todoID = todoItem.parentElement.dataset.id;

    setCurrentProjectID(currentProjectID);
    openTodoInfoDialog(todoID);
    return;
  }

  if (isDoneCheckBox) {
    const todoID = isDoneCheckBox.parentElement.dataset.id;

    if (isDoneCheckBox.checked) {
      updateIsDoneAndDisplay(currentProjectID, todoID, true);
    } else {
      updateIsDoneAndDisplay(currentProjectID, todoID, false);
    }
  }

  if (deleteTodoImg) {
    const todoID = deleteTodoImg.parentElement.dataset.id;

    deleteTodoAndUpdateDisplay(currentProjectID, todoID);
    return;
  }

  if (editTodoImg) {
    const todoID = editTodoImg.parentElement.dataset.id;

    showEditTodoFormDialog(currentProjectID, todoID);
  }
});

initialDisplay();
