const palleteBtn = document.querySelector(".pallette-btn");
const palleteMenu = document.querySelector(".pallete-menu");
const closePalleteMenuBtn = document.querySelector(".close-menu-btn");
// theme buttons
const themeBtns = document.querySelectorAll(".theme-btn");
palleteBtn.addEventListener("click", () => {
  palleteMenu.classList.toggle("pallete-menu-toggle");
});

closePalleteMenuBtn.addEventListener("click", () => {
  palleteMenu.classList.toggle("pallete-menu-toggle");
});

console.log(themeBtns);
