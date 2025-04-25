import { currentProjectID } from "../index.js";

const taskDialog = document.querySelector(".task-dialog");

// Todo Form Dialog Process

function showTodoFormDialog() {
  taskDialog.showModal();
}

const closeTaskDialogbtn = document.querySelector(".task-cancel-btn");
closeTaskDialogbtn.addEventListener("click", () => {
  taskDialog.close();
});

export { showTodoFormDialog };
