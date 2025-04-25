import { projectList } from "../project-module/project";

function displayProjectTodoItems(projectID) {
  projectList.forEach((project) => {
    if (project.id === projectID) {
      const todoContainer = document.querySelector(".todo-container");
      todoContainer.innerHTML = "";

      for (let i = 0; i < project.todoItems.length; i++) {
        const todoItem = document.createElement("div");
        todoItem.textContent = project.todoItems[i];

        todoContainer.appendChild(todoItem);
      }
    }
  });
}

export { displayProjectTodoItems };
