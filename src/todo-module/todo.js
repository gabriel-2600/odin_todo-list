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
  constructor(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
}

function createTodoItemObject(
  currentProjectID,
  title,
  description,
  dueDate,
  priority
) {
  const project = projectList.find(
    (project) => project.id === currentProjectID
  );

  if (project) {
    const randomID = crypto.randomUUID();

    const todoItem = new TodoItem(
      randomID,
      title,
      description,
      dueDate,
      priority
    );

    project.todoItems.push(todoItem);
  }
}

export { createTodoItemObject };
