const userForm = document.querySelector(
    "main .main-column:first-child .main-user .main-user_form"
  ),
  userInput = userForm.querySelector(".main-user_form_input"),
  userName = document.querySelector(
    "main .main-column:first-child .main-user .main-user_userName"
  );

const NAME = "name";

function loadUserName(user) {
  showUserName(user);
}

function saveUserName(value) {
  localStorage.setItem(NAME, value);
}

function showUserName(value) {
  userForm.classList.remove("show");
  userName.innerText = `Welcome ${value}`;
  userName.classList.add("show");
}

function handleSubmit(event) {
  event.preventDefault();
  const value = userInput.value;
  showUserName(value);
  saveUserName(value);
}

function askForUserName() {
  userForm.classList.add("show");
  userForm.addEventListener("submit", handleSubmit);
}

function init() {
  const user = localStorage.getItem(NAME);
  if (user === null) {
    askForUserName();
  } else {
    loadUserName(user);
  }
}
init();
