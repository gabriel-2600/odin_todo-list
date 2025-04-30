import { getToLocalStorage } from "../project-module/project";
import deletePNG from "./../assets/delete.png";
import editPNG from "./../assets/edit.png";

function retrieveProject(projectID) {
  const projectList = getToLocalStorage();
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

    const isDoneCheckBox = document.createElement("input");
    isDoneCheckBox.setAttribute("type", "checkbox");
    isDoneCheckBox.classList.add("todo-checkbox");

    const todoNameHeader = document.createElement("h4");
    todoNameHeader.textContent = todoItem.title;

    if (todoItem.isDone) {
      isDoneCheckBox.checked = true;
      todoItemContent.style.opacity = "0.2";
      todoNameHeader.style.textDecoration = "line-through";
    }

    const todoDueDateHeader = document.createElement("h4");
    if (!todoItem.dueDate) {
      todoDueDateHeader.textContent = `No Due Date`;
    } else {
      todoDueDateHeader.textContent = `Due Date: ${todoItem.dueDate}`;
    }

    const todoPriorityContainer = document.createElement("div");
    todoPriorityContainer.classList.add("todo-priority-container");
    todoPriorityContainer.textContent = `${todoItem.priority}`;
    if (todoItem.priority === "Low") {
      todoPriorityContainer.style.border = "1px solid green";
      todoPriorityContainer.style.backgroundColor = "#d1ffbd";
    } else if (todoItem.priority === "Medium") {
      todoPriorityContainer.style.border = "1px solid orange";
      todoPriorityContainer.style.backgroundColor = "#FFDEAD";
    } else if (todoItem.priority === "High") {
      todoPriorityContainer.style.border = "1px solid red";
      todoPriorityContainer.style.backgroundColor = "#eabebe";
    }

    todoItemContent.appendChild(todoNameHeader);
    todoItemContent.appendChild(todoDueDateHeader);
    todoItemContent.appendChild(todoPriorityContainer);

    const deleteBtnImage = document.createElement("img");
    deleteBtnImage.src = deletePNG;
    deleteBtnImage.width = "30";
    deleteBtnImage.height = "30";
    deleteBtnImage.classList.add("delete-todo-img");

    const editTodoImage = document.createElement("img");
    editTodoImage.src = editPNG;
    editTodoImage.width = "30";
    editTodoImage.height = "30";
    editTodoImage.classList.add("edit-todo-img");

    todoItemContainer.appendChild(isDoneCheckBox);
    todoItemContainer.appendChild(todoItemContent);
    todoItemContainer.appendChild(deleteBtnImage);
    todoItemContainer.appendChild(editTodoImage);

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

  const todoDescriptionHeader = document.createElement("h4");
  todoDescriptionHeader.textContent = "Description:";

  const todoDescription = document.createElement("h4");
  todoDescription.classList.add("todo-description-container");
  if (!todoItem.description) {
    todoDescription.textContent = `N/A`;
  } else {
    todoDescription.textContent = `${todoItem.description}`;
  }

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.classList.add("close-todo-info-btn");

  todoItemDialog.appendChild(todoDescriptionHeader);
  todoItemDialog.appendChild(todoDescription);
  todoItemDialog.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => {
    todoItemDialog.close();
  });

  todoItemDialog.showModal();
}

export { displayProjectTodoItems, displayTodoItemInfoDialog };
