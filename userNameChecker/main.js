/* let usernames = [];

function addUsername() {
  const input = document.getElementById("usernameInput");
  const username = input.value.trim();

  if (username === "") {
    displayErrorMessage("Username cannot be empty");
    return;
  }

  if (usernames.includes(username)) {
    displayErrorMessage("Username already exists");
    return;
  }

  usernames.push(username);
  input.value = "";

  alert("Username added successfully");
}

function displayErrorMessage(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
}
 */

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", addUsername);
});

let firstNames = [];
let lastNames = [];

function addUsername() {
  const input = document.getElementById("usernameInput2");
  const fullName = input.value.trim();
  const [firstName, lastName] = fullName.split(" ");

  if (firstName === "" || lastName === "") {
    displayErrorMessage("Please enter both first and last names");
    return;
  }

  if (firstNames.includes(firstName) && lastNames.includes(lastName)) {
    displayErrorMessage("The name match already exist");
    return;
  }

  firstNames.push(firstName);
  lastNames.push(lastName);
  input.value = "";

  alert("Username added successfully");
}

function displayErrorMessage(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
}
