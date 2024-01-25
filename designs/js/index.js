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

let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .slides ");
let dots = document.querySelectorAll(".slider .dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
};

let refreshSlider = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  let checkLeft = items[active].offsetleft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".slider .bullets .dot.active");
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
// const showSlides = (n) => {
//   var i;
//   var slides = document.getElementsByClassName("slides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     n = 1;
//   }
//   if (n < 1) {
//     n = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dots[i].className = dots[i].className.replace(" active", ""); // Remove "active" class from all dots
//   }

//   slides[n - 1].style.display = "block";
//   dots[n - 1].className += " active"; // Add "active" class to current dot
// };

// let slideIndex = 1;
// showSlides(slideIndex);

// const plusSlides = (n) => {
//   slideIndex += n;
//   showSlides(slideIndex);
// };

// const currentSlide = (n) => {
//   slideIndex = n;
//   showSlides(slideIndex);
// };

// const dots = document.getElementsByClassName("dot");
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");

// prevButton.addEventListener("click", () => {
//   plusSlides(-1);
// });

// nextButton.addEventListener("click", () => {
//   plusSlides(1);
// });

// for (let i = 0; i < dots.length; i++) {
//   dots[i].addEventListener("click", () => {
//     currentSlide(i + 1);
//   });
// }
