import "./styles.css";

const currentProjectID = "1";

class TodoItem {
  constructor(title, description, dueDate, priority, isDone) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
}

// const defaultProject = new Project("0", "My Todos");
// const test2 = new Project("1", "Website Coding");

// const projectsArray = [];
// projectsArray.push(defaultProject);
// projectsArray.push(test2);

// const getCurrentProject = projectsArray.find(
//   (project) => project.id === currentProjectID
// );

// const addTaskBtn = document.querySelector(".add-task-btn");
// let click = 0;
// addTaskBtn.addEventListener("click", (event) => {
//   click++;
//   const todoItem = new TodoItem(`Number: ${click}`);
//   getCurrentProject.todoItems.push(todoItem);
//   console.log(getCurrentProject);
// });

import { displayDefaultProject } from "./project-module/project-DOM.js";
import { showProjectFormDialog } from "./project-module/project-events.js";
displayDefaultProject();

const addProjectBtn = document.querySelector(".add-project-btn");
addProjectBtn.addEventListener("click", () => {
  showProjectFormDialog();
});

const deleteProjectBtn = document.querySelector(".delete-project-btn");
