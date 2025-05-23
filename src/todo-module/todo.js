import { projectList, saveToLocalStorage } from "../project-module/project";
import "./todo-style.css";

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
    saveToLocalStorage();
  }
}

function deleteTodoItemObject(currentProjectID, todoItemID) {
  const project = projectList.find(
    (project) => project.id === currentProjectID
  );

  project.todoItems.forEach((todo, index) => {
    if (todo.id === todoItemID) {
      project.todoItems.splice(index, 1);

      saveToLocalStorage();
      return;
    }
  });
}

function updateTodoIsDone(currentProjectID, todoItemID, isDoneValue) {
  const project = projectList.find(
    (project) => project.id === currentProjectID
  );

  const todoItem = project.todoItems.find(
    (todoItemElement) => todoItemElement.id === todoItemID
  );

  todoItem.isDone = isDoneValue;

  saveToLocalStorage();
}

export { createTodoItemObject, deleteTodoItemObject, updateTodoIsDone };
