//slide show
const list = document.querySelector(".slider .list");
const items = document.querySelectorAll(".slider .list .slides");
const dots = document.querySelectorAll(".slider .dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let active = 0;
const lengthItems = items.length - 1;

next.addEventListener("click", function() {
    event.preventDefault()
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
 
});

prev.addEventListener("click", function() {
    event.preventDefault()
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
  dot.addEventListener("click", function() {
    active = key;
    reloadSlider();
  });
});