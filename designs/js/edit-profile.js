const profileName = document.querySelector(".profile-name");
const inputFirstName = document.getElementById("firstName");
const inputLastName = document.getElementById("lastName");
const displayName = document.getElementById("displayName");
const inputNumber = document.getElementById("number");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const saveBtn = document.querySelector(".save");
const exitBtn = document.querySelector(".exit");

let firstName = "";
let lastName = "";

inputLastName.addEventListener("input", (e) => {
  lastName = e.target.value;
});

inputFirstName.addEventListener("input", (e) => {
  firstName = e.target.value;
});
const storedName = localStorage.getItem("profileName");
if (storedName) {
  profileName.innerHTML = storedName;
}
function saveFunc() {
  const fullName = `${firstName} ${lastName}`;
  localStorage.setItem("profileName", fullName);
  profileName.textContent = fullName;
}
let storedDisplayName = "";

displayName.addEventListener("input", (e) => {
  storedDisplayName = e.target.value;
});

//display name lang check
function validateDisplayName(storedDisplayName) {
  let pattern = /^[a-zA-Z0-9_ ]*$/;
  let inputValue = storedDisplayName;
  if (!pattern.test(inputValue)) {
    alert("لطفا انگلیسی تایپ کنید.");
    displayName.value = "";
  }
  localStorage.setItem("displayName", storedDisplayName);
}
let number = "";

inputNumber.addEventListener("input", (e) => {
  number = e.target.value;
});

// check phone number
function validateNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    alert("تعداد رقم ها کافی نیست");
    inputNumber.value = "";
  }
  if (phoneNumber.charAt(0) !== "0" && phoneNumber.charAt(1) !== "9") {
    alert("شماره باید با 09 شروع شود");
    inputNumber.value = "";
  }
  localStorage.setItem("phoneNumber", phoneNumber);
}

let email = "";
inputEmail.addEventListener("input", (e) => {
  email = e.target.value;
});

// Email validation
function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(email)) {
    let emailAddress = email;
    localStorage.setItem("email", emailAddress);
  }
}

let pass = "";
inputPassword.addEventListener("input", (e) => {
  pass = e.target.value;
});

// password validation

function validatePassword(password) {
  let passPatern = /^[A-Za-z]\w{7,14}$/;
  if(password.match(passPatern)){
    localStorage.setItem("password",password)
  }else{
    alert("رمز عبور باید شامل حروف , عدد و حداقل 7 کاراکتر باشد")
  }
}
saveBtn.addEventListener("click", () => {
  saveFunc();
  validateDisplayName(storedDisplayName);
  validateNumber(number);
  validateEmail(email);
  validatePassword(pass)
});
