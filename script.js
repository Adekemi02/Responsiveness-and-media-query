//create a variable for each event to be carried on
const form = document.getElementById("form");
const FirstName = document.getElementById("firstname");
const LastName = document.getElementById("lastname");
const Email = document.getElementById("email");
const Password = document.getElementById("password");

//this targets the buttton element anytime it is clicked and prevents the form from submitting

function validateInput() {
  //check if the name is empty
  if (FirstName.value.trim() === "") {
    displayError(FirstName, "First name cannot be empty");
  } else {
    displaySuccess(FirstName);
  }

  if (LastName.value.trim() === "") {
    displayError(LastName, "Last name cannot be empty");
  } else {
    displaySuccess(LastName);
  }

  if (Email.value.trim() === "") {
    displayError(Email, "Email cannot be empty");
  } else {
    if (!emailIsValid(email.value.trim())) {
      displayError(Email, "Looks like this is not an email");
    } else {
      displaySuccess(Email);
    }
  }

  if (Password.value.trim() === "") {
    displayError(Password, "Password cannot be empty");
  } else {
    displaySuccess(Password);
  }
}

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  validateInput();
});

function displaySuccess(input) {
  //this gets the parent element of the FirstName we got by the id "firstName" i.e the div element
  let parent = input.parentElement;
  // this gets the small element
  let messageElement = parent.querySelector("small");
  messageElement.style.visibility = "hidden";
  messageElement.innerText = "";
  parent.classList.remove("error");
  parent.classList.add("success");
}

function displayError(input, message) {
  let parent = input.parentElement;
  let messageElement = parent.querySelector("small");
  messageElement.style.visibility = "visible";
  messageElement.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function emailIsValid(email) {
  const emailCheck =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  return emailCheck;
}

//this prevents the form from submitting because we want to validate our input
// form.addEventListener("submit", e => {
//   e.preventDefault()
