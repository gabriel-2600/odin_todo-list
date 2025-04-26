import { projectList } from "../project-module/project";

function displayProjectTodoItems(projectID) {
  projectList.forEach((project) => {
    if (project.id === projectID) {
      const contentProjectName = document.querySelector(
        ".content-project-name"
      );
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

        todoItemContainer.appendChild(todoItemContent);

        todoContainer.appendChild(todoItemContainer);
      });
    }
  });
}

export { displayProjectTodoItems };
