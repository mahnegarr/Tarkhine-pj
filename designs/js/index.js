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
const showSlides = (n) => {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
};

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlides = (n) => {
  if(slideIndex!== n){

    showSlides((slideIndex == n));
    dots[slideIndex -1].className +="active";
    for(let i=0;i<dots.length;i++){
      dots[i].className=dots[i].className.replace("active","")
    }
  }
};

