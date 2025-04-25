class Project {
  constructor(id, projectName) {
    this.id = id;
    this.projectName = projectName;
    this.todoItems = [];
  }
}

// Default Project
const defaultProject = new Project("0", "My Todos");

// Store the Project Objects into the array
const projectList = [];

// Create Project
function createProjectObject(projectName) {
  const randomID = crypto.randomUUID();

  const project = new Project(randomID, projectName);
  projectList.push(project);
}

// Delete Project
function deleteProjectObject(projectID) {
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].id === projectID) {
      projectList.splice(i, 1);
    }
  }
}

export {
  projectList,
  defaultProject,
  createProjectObject,
  deleteProjectObject,
};
