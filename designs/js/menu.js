import { allFood } from "./allFood.js";

const allFoodDiv = document.querySelector(".allFood");
const foodElement = document.createElement("div");
const foodHeader = document.querySelector(".allFood-header");
const iranianFood = document.querySelector(".iranian-food");
const foreignFood = document.querySelector(".foreign-food");
const searchInput = document.getElementById("search");

function addFood(array) {
  foodElement.classList.add("food-container");
  let result = "";
  array.forEach((f) => {
    result += `<div class="food-container">
  <div class="food">
    <div class="food-image">
      <img src="${f.image}" alt="" />
    </div>
    <div class="food-info">
      <div class="food-name">
        <p>${f.name}</p>
      </div>
      <div class="food-detail">
        <p class="food-recipe">${f.recipe}</p>
        <div class="food-price-box">
            <p class="first-price">${f.price}</p>
            <p class="discount"><span>%</span>${f.discount}</p>
        </div>
        
        <p class="last-price">${f.offPrice} تومان</p>
      </div>
    </div>
    <div class="food-cta">
      <div class="food-star">
        <img src="./designs/assets/Star.svg" alt="star" />
        <img src="./designs/assets/Star.svg" alt="star" />
        <img src="./designs/assets/Star.svg" alt="star" />
        <img src="./designs/assets/Star.svg" alt="star" />
        <img src="./designs/assets/Star.svg" alt="star" />
      </div>
      <button class="add-to-cart">افزودن به سبد خرید</button>
    </div>
  </div>
</div>`;
  });
  foodElement.innerHTML = result;
  allFoodDiv.appendChild(foodElement);
}
window.addEventListener("DOMContentLoaded", () => {
  addFood(allFood);
});

iranianFood.addEventListener("click", (e) => {
  const iranianFoods = allFood.filter((f) => f.type === "iranian");
  addFood(iranianFoods);
  foodHeader.innerHTML = "غذا های ایرانی";
});

foreignFood.addEventListener("click", (e) => {
  const foreignFoods = allFood.filter((f) => f.type === "foreign");
  addFood(foreignFoods);
  foodHeader.innerHTML = "غذا های غیر ایرانی";
});

// search input

searchInput.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  let filteredFood = allFood.filter((f) => f.name.includes(inputValue));
  addFood(filteredFood)
});
