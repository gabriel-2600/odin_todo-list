import { createTodoItemObject, deleteTodoItemObject } from "./todo";
import { displayProjectTodoItems, displayTodoItemInfoDialog } from "./todo-DOM";

let currentProjectID;

function setCurrentProjectID(getCurrentProjectID) {
  currentProjectID = getCurrentProjectID;
}

// Todo Form Dialog Process
const todoDialog = document.querySelector(".todo-dialog");

const todoForm = document.querySelector(".todo-form");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoNameInput = document.querySelector("#todo-name");
  const todoDescriptionInput = document.querySelector("#todo-description");
  const todoDueDateInput = document.querySelector("#todo-due-date");
  const todoPriorityInput = document.querySelector(
    'input[name="todo-priority"]:checked'
  );

  const todoNameValue = todoNameInput.value;
  const todoDescriptionValue = todoDescriptionInput.value;
  const todoDueDateValue = todoDueDateInput.value;
  const todoPriorityValue = todoPriorityInput.value;

  createTodoItemObject(
    currentProjectID,
    todoNameValue,
    todoDescriptionValue,
    todoDueDateValue,
    todoPriorityValue
  );
  displayProjectTodoItems(currentProjectID);

  closeTodoDialogbtn.click();
});

// Open Todo Form Dialog
function showTodoFormDialog() {
  todoDialog.showModal();
}

// Close Todo Form Dialog
const closeTodoDialogbtn = document.querySelector(".todo-cancel-btn");
closeTodoDialogbtn.addEventListener("click", () => {
  todoDialog.close();
});

// Delete Todo Item
function deleteTodoAndUpdateDisplay(currentProjectID, todoItemID) {
  deleteTodoItemObject(currentProjectID, todoItemID);
  displayProjectTodoItems(currentProjectID);
}

function openTodoInfoDialog(todoID) {
  displayTodoItemInfoDialog(currentProjectID, todoID);
}

export {
  showTodoFormDialog,
  setCurrentProjectID,
  deleteTodoAndUpdateDisplay,
  openTodoInfoDialog,
};
