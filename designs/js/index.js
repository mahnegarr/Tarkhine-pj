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
  showModal();
});

//slide show
const list = document.querySelector(".slider .list");
const items = document.querySelectorAll(".slider .list .slides");
const dots = document.querySelectorAll(".slider .dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let active = 0;
const lengthItems = items.length - 1;

next.addEventListener("click", function () {
  event.preventDefault();
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
});

prev.addEventListener("click", function () {
  event.preventDefault();
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
});

let refreshSlider = setInterval(() => {
  next.click();
}, 3000);

function reloadSlider() {
  const checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  const lastActiveDot = document.querySelector(".slider .bullets .dot.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((dot, key) => {
  dot.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});
