const iconImgs = document.querySelectorAll(".icon img");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");

iconImgs.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.parentNode.parentNode.querySelector(".popup-image").src;
    modal.style.display = "block";
  });
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
