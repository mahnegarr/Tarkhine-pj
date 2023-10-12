const logout = document.querySelector(".logout");
const backdrop = document.querySelector(".backdrop");
const closeIcon = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const phoneNumber = document.getElementById("number");
const continueBtn = document.getElementById("continue");

function showModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
  console.log("hi");
}
function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}
logout.addEventListener("click", (e) => {

  showModal();
});
closeIcon.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", () => {
  closeModal();
});

function validateNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    alert("تعداد رقم ها کافی نیست");
    phoneNumber.value = "";
    continueBtn.disabled = true; // disable the button
    continueBtn.classList.remove("enable-btn"); // remove the class
    return false; // return false to indicate validation failed
  }
  if (phoneNumber.charAt(0) !== "0" || phoneNumber.charAt(1) !== "9") {
    alert("شماره باید با 09 شروع شود");
    phoneNumber.value = "";
    continueBtn.disabled = true; // disable the button
    continueBtn.classList.remove("enable-btn"); // remove the class
    return false; // return false to indicate validation failed
  }
  localStorage.setItem("phoneNumber", phoneNumber);
  enableBtn(); // call the enableButton function if validation succeeded
  return true; // return true to indicate validation succeeded
}
let number = "";
phoneNumber.addEventListener("focusout", (e) => {
  number = e.target.value;
  validateNumber(number);
});

function enableBtn() {
  continueBtn.disabled = false;
  continueBtn.classList.add("enable-btn");
}
