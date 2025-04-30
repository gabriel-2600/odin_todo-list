import { projectList, saveToLocalStorage } from "../project-module/project";
import { displayProjectTodoItems } from "./todo-DOM";

let projectID;
let todoID;

let projectItem;
let todoItem;

// Process the Form
// Update the todo item values
// Display the updated todo item values
const editTodoFormDialog = document.querySelector(".edit-todo-dialog");

const editTodoForm = document.querySelector(".edit-todo-form");
editTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoNameInput = document.querySelector("#edit-todo-name");
  const todoDescriptionInput = document.querySelector("#edit-todo-description");
  const todoDueDateInput = document.querySelector("#edit-todo-due-date");
  const todoPriorityInput = document.querySelector(
    'input[name="edit-todo-priority"]:checked'
  );

  const todoNameValue = todoNameInput.value;
  const todoDescriptionValue = todoDescriptionInput.value;
  const todoDueDateValue = todoDueDateInput.value;
  const todoPriorityValue = todoPriorityInput.value;

  todoItem.title = todoNameValue;
  todoItem.description = todoDescriptionValue;
  todoItem.dueDate = todoDueDateValue;
  todoItem.priority = todoPriorityValue;

  saveToLocalStorage();

  displayProjectTodoItems(projectID);

  closeEditTodoDialogbtn.click();
});

// Show Todo Form Dialog
// Set each input value based on each todo item value
function showEditTodoFormDialog(currentProjectID, currentTodoID) {
  projectID = currentProjectID;
  todoID = currentTodoID;

  projectItem = projectList.find((project) => project.id === projectID);

  todoItem = projectItem.todoItems.find((todo) => todo.id === todoID);

  document.querySelector("#edit-todo-name").defaultValue = todoItem.title;

  document.querySelector("#edit-todo-description").defaultValue =
    todoItem.description;

  document.querySelector("#edit-todo-due-date").defaultValue = todoItem.dueDate;

  if (todoItem.priority === "Low") {
    document.querySelector("#edit-todo-low-priority").checked = true;
  } else if (todoItem.priority === "Medium") {
    document.querySelector("#edit-todo-medium-priority").checked = true;
  } else if (todoItem.priority === "High") {
    document.querySelector("#edit-todo-high-priority").checked = true;
  }

  editTodoFormDialog.showModal();
}

// Close Edit Todo Form Dialog
const closeEditTodoDialogbtn = document.querySelector(".edit-todo-cancel-btn");
closeEditTodoDialogbtn.addEventListener("click", () => {
  editTodoFormDialog.close();
});

export { showEditTodoFormDialog };
