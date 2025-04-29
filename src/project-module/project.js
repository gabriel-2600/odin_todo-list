class Project {
  constructor(id, projectName) {
    this.id = id;
    this.projectName = projectName;
    this.todoItems = [];
  }
}
// Store the Project Objects into the array
let projectList = [];

// Default Project
const defaultProject = new Project("0", "My Todos");
const getDefaultProjectID = defaultProject.id;

projectList.push(defaultProject);
if (!getToLocalStorage()) {
  saveToLocalStorage();
} else {
  projectList = getToLocalStorage();
}

// Create Project
function createProjectObject(projectName) {
  const randomID = crypto.randomUUID();

  const project = new Project(randomID, projectName);
  projectList.push(project);
  saveToLocalStorage();
}

// Delete Project
function deleteProjectObject(projectID) {
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].id === projectID) {
      projectList.splice(i, 1);
      saveToLocalStorage();

      return;
    }
  }
}

function saveToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projectList));
}

function getToLocalStorage() {
  const projects = JSON.parse(localStorage.getItem("projects"));
  return projects;
}

export {
  projectList,
  defaultProject,
  getDefaultProjectID,
  createProjectObject,
  deleteProjectObject,
  saveToLocalStorage,
  getToLocalStorage,
};
