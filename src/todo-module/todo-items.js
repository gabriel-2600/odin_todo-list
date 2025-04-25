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

import { projectList } from "../project-module/project";

class TodoItem {
  constructor(title, description, dueDate, priority, isDone) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
}
