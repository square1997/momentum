const toDoForm = document.querySelector(".main-center-right_formBox_form"),
  toDoInput = document.querySelector(".main-center-right_formBox_form input"),
  pendingList = document.querySelector(".pending-list"),
  finishedList = document.querySelector(".finished-list");
let PENDING_AR = [];
let FINISHED_AR = [];
const PENDING = "pending";
const FINISHED = "finished";

function savePending() {
  localStorage.setItem(PENDING, JSON.stringify(PENDING_AR));
}

function saveFinished() {
  localStorage.setItem(FINISHED, JSON.stringify(FINISHED_AR));
}

function switchToFinished(event) {
  const li = event.target.parentElement;
  const obj = PENDING_AR.filter((todo) => todo.id === parseInt(li.id))[0];
  FINISHED_AR.push(obj);
  saveFinished();
  deletePendingList(event);
  printFinished(obj);
  li.remove();
}

function switchToPending(event) {
  const li = event.target.parentElement;
  const obj = FINISHED_AR.filter((todo) => todo.id === parseInt(li.id))[0];
  PENDING_AR.push(obj);
  savePending();
  deleteFinishedList(event);
  printPending(obj);
  li.remove();
}

function deletePendingList(event) {
  const li = event.target.parentElement;
  PENDING_AR = PENDING_AR.filter((todo) => todo.id !== parseInt(li.id));
  savePending();
  li.remove();
}

function deleteFinishedList(event) {
  const li = event.target.parentElement;
  FINISHED_AR = FINISHED_AR.filter((todo) => todo.id !== parseInt(li.id));
  saveFinished();
  li.remove();
}

function printPending(value) {
  const li = document.createElement("li");
  li.id = value.id;
  const span = document.createElement("span");
  span.innerText = value.todo;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deletePendingList);
  const switchList = document.createElement("button");
  switchList.innerText = "✅";
  switchList.addEventListener("click", switchToFinished);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(switchList);
  pendingList.appendChild(li);
}

function printFinished(value) {
  const li = document.createElement("li");
  li.id = value.id;
  const span = document.createElement("span");
  span.innerText = value.todo;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteFinishedList);
  const switchList = document.createElement("button");
  switchList.addEventListener("click", switchToPending);
  switchList.innerText = "🔙";
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(switchList);
  finishedList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const toDoOBJ = {
    todo: newTodo,
    id: Date.now(),
  };
  PENDING_AR.push(toDoOBJ);
  savePending();
  printPending(toDoOBJ);
}

function loadForPending() {
  const savedPending = localStorage.getItem(PENDING);
  if (savedPending !== null) {
    PENDING_AR = JSON.parse(savedPending);
    for (todo of PENDING_AR) {
      printPending(todo);
    }
  }
}

function loadForFinished() {
  const savedFinished = localStorage.getItem(FINISHED);
  if (savedFinished !== null) {
    FINISHED_AR = JSON.parse(savedFinished);
    for (todo of FINISHED_AR) {
      printFinished(todo);
    }
  }
}

loadForPending();
loadForFinished();
toDoForm.addEventListener("submit", handleTodoSubmit);
