import { specialFood } from "./allFood.js";

const boxSection = document.querySelector(".box-slider");
const boxContainer = document.createElement("div");
function addFood(array) {
    boxContainer.classList.add("box-container")
    let result = "";
    
    specialFood.forEach((f) => {
        result += `
        <div class="box-container">
        <div class="slide-img">
        <img src="./designs/assets/special/dolme.png" alt="dolme">
        </div>
        <p class="food-title">دلمه برگ کلم</p>
        <div class="top-sec">
        <div class="add-to-fav">
        <img src="./designs/assets/whiteHeart.png" alt="whiteHeart">
        <p>افزودن به علاقمندی‌ها</p>
        </div>
        <div class="price-box">
        <p class="offprice">220,000</p>
        <span class="discount"><span>%</span>8</span>
        </div>
        </div>
        <div class="bottom-sec">
        <div class="star-box">
        <img src="./designs/assets/Star.svg" alt="Star">
        <p class="star-number">5</p>
        <p class="star-point">(52 امتیاز)</p>
        </div>
            <p class="last-price">209,000 تومان</p>
        </div>
        <button class="add-to-cart">افزودن به سبد خرید</button>
        </div>
        `
    });
    boxContainer.innerHTML = result;
    boxSection.appendChild(boxContainer);
    
}

window.addEventListener("DOMContentLoaded",()=>{
    addFood(specialFood);
})