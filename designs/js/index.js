const login = document.querySelector(".login");
const backdrop = document.querySelector(".backdrop");
const closeIcon = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const phoneNumber = document.getElementById("number");
const continueBtn = document.getElementById("continue");
const searchBtn = document.querySelector(".search-btn");
const searchModal = document.querySelector(".search-modal");

function showModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  localStorage.removeItem("modalShown");
}
login.addEventListener("click", () => {
  showModal()
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
    continueBtn.disabled = true;
    continueBtn.classList.remove("enable-btn");
    return false;
  }
  if (phoneNumber.charAt(0) !== "0" || phoneNumber.charAt(1) !== "9") {
    alert("شماره باید با 09 شروع شود");
    phoneNumber.value = "";
    continueBtn.disabled = true;
    continueBtn.classList.remove("enable-btn");
    return false;
  }
  localStorage.setItem("phoneNumber", phoneNumber);
  enableBtn();
  return true;
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

searchBtn.addEventListener("click", () => {
  showModal()
});
