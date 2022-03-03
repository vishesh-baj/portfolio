const palleteBtn = document.querySelector(".pallette-btn");
const palleteMenu = document.querySelector(".pallete-menu");
const closePalleteMenuBtn = document.querySelector(".close-menu-btn");

palleteBtn.addEventListener("click", () => {
  palleteMenu.classList.toggle("pallete-menu-toggle");
});

closePalleteMenuBtn.addEventListener("click", () => {
  palleteMenu.classList.toggle("pallete-menu-toggle");
});
