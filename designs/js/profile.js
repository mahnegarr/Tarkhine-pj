const profileName = document.querySelector(".profile-name");
const inputFirstName = document.getElementById("firstName");
const inputLastName = document.getElementById("lastName");
const inputDisplayName = document.getElementById("displayName");
const inputNumber = document.getElementById("number");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const profileNumber = document.querySelector(".profile-number");
const btn = document.querySelector(".editBtn")
let fullName = localStorage.getItem("profileName");
profileName.textContent = fullName;

const first = fullName.split(" ")[0];
inputFirstName.placeholder = first;

const last = fullName.split(" ")[1];
inputLastName.placeholder = last;

let displayName = localStorage.getItem("displayName");
inputDisplayName.placeholder = displayName;

let number = localStorage.getItem("phoneNumber");
inputNumber.placeholder = number;

let email = localStorage.getItem("email");
inputEmail.placeholder = email;

let password = localStorage.getItem("password");
let hidePass = password.replace(/./g, "*");
inputPassword.placeholder = hidePass;

profileNumber.innerHTML = localStorage.getItem("phoneNumber");

btn.addEventListener("click",redirectFunc)

function redirectFunc() {
  window.location.href = "edit-profile.html";
}
