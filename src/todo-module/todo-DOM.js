import { projectList } from "../project-module/project";
import deletePNG from "./../assets/delete.png";

function retrieveProject(projectID) {
  const project = projectList.find((project) => project.id === projectID);

  if (!project) return;
  return project;
}

function displayProjectTodoItems(projectID) {
  const project = retrieveProject(projectID);

  const contentProjectName = document.querySelector(".content-project-name");
  contentProjectName.innerHTML = "";

  const todoContainer = document.querySelector(".todo-container");
  todoContainer.innerHTML = "";

  contentProjectName.textContent = project.projectName;

  project.todoItems.forEach((todoItem) => {
    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo");
    todoItemContainer.dataset.id = todoItem.id;

    const todoItemContent = document.createElement("div");
    todoItemContent.classList.add("todo-item-content");

    const todoNameHeader = document.createElement("h4");
    todoNameHeader.textContent = todoItem.title;

    const todoDueDateHeader = document.createElement("h4");
    todoDueDateHeader.textContent = todoItem.dueDate;

    const todoPriorityContainer = document.createElement("div");
    todoPriorityContainer.classList.add("todo-priority-container");
    todoPriorityContainer.textContent = `${todoItem.priority}`;

    todoItemContent.appendChild(todoNameHeader);
    todoItemContent.appendChild(todoDueDateHeader);
    todoItemContent.appendChild(todoPriorityContainer);

    const deleteBtnImage = document.createElement("img");
    deleteBtnImage.src = deletePNG;
    deleteBtnImage.width = "30";
    deleteBtnImage.height = "30";
    deleteBtnImage.classList.add("delete-todo-img");

    todoItemContainer.appendChild(todoItemContent);
    todoItemContainer.appendChild(deleteBtnImage);

    todoContainer.appendChild(todoItemContainer);
  });
}

function displayTodoItemInfoDialog(currentProjectID, todoID) {
  const project = retrieveProject(currentProjectID);

  const todoItem = project.todoItems.find(
    (todoElement) => todoElement.id === todoID
  );

  const todoItemDialog = document.querySelector(".todo-item-dialog");
  todoItemDialog.innerHTML = "";

  const todoDescription = document.createElement("h4");
  todoDescription.textContent = `${todoItem.description}`;

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.classList.add("close-todo-info-btn");

  todoItemDialog.appendChild(todoDescription);
  todoItemDialog.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => {
    todoItemDialog.close();
  });

  todoItemDialog.showModal();
}

export { displayProjectTodoItems, displayTodoItemInfoDialog };
