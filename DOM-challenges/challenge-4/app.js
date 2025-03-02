const taskInput = document.getElementById("taskInput");
const addBttn = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const emptyList = document.querySelector("#taskList .empty-list");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let completedCount = 0;

addBttn.addEventListener("click", addTasks);

function addTasks() {
  const inputValue = taskInput.value;
  taskInput.value = "";
  taskInput.placeholder = "Add a new task...";
  if (typeof inputValue === "string" && inputValue.trim()) {
    let li = document.createElement("li");
    li.setAttribute("class", "task-item");

    taskList.appendChild(li);
    emptyList.remove();
    totalCompletedTasks();

    addCheckBoxAndText(li, inputValue);
  } else {
    alert("Invalid Input");
  }
}

const totalCompletedTasks = () => {
  if (taskList.children.length > 0) {
    totalTasks.innerText = `Total tasks: ${taskList.children.length}`;
  }
};

const addCheckBoxAndText = (li, inputValue) => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const textNode = document.createTextNode(inputValue);

  input.type = "checkbox";
  input.className = "complete-checkbox";

  label.className = "task-text";
  label.style.display = "flex";

  label.append(input);
  label.append(textNode);
  li.append(label);

  addDeleteBttn(li);
  checkBoxClick(input, label, li);
};

function addDeleteBttn(li) {
  const deletebttn = document.createElement("button");
  deletebttn.setAttribute("class", "delete-button");
  deletebttn.innerText = "Delete";
  li.appendChild(deletebttn);

  deletebttn.addEventListener("click", () => {
    totalTasks.innerText = `Total tasks: ${taskList.children.length - 1}`;
    if (completedCount > 0) {
      completedTasks.innerText = `Completed: ${--completedCount}`;
    }
    li.remove();
    if (taskList.firstElementChild == null) {
      taskList.appendChild(emptyList);
    }
  });
}

const checkBoxClick = (input, label, li) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      li.classList.add("completed");
      label.classList.add("task-text2");
      completedTasks.innerText = `Completed: ${++completedCount}`;
    } else {
      label.classList.remove("task-text2");
      completedTasks.innerText = `Completed: ${--completedCount}`;
    }
  });
};
