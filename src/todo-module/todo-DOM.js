import { projectList } from "../project-module/project";
import deletePNG from "./../assets/delete.png";

function displayProjectTodoItems(projectID) {
  const project = projectList.find((project) => project.id === projectID);

  if (!project) return;

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

    todoItemContent.appendChild(todoNameHeader);
    todoItemContent.appendChild(todoDueDateHeader);

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

export { displayProjectTodoItems };
