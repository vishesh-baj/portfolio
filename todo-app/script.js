const palleteBtn = document.querySelector(".pallette-btn");
const palleteMenu = document.querySelector(".pallete-menu");
const closePalleteMenuBtn = document.querySelector(".close-menu-btn");
// theme buttons
const themeBtns = document.querySelectorAll(".theme-btn");
// add todo button
const addTodo = document.querySelector(".add-todo");
// plus-btn
const plusBtn = document.querySelector("#add-item");
palleteBtn.addEventListener("click", () => {
  palleteMenu.classList.toggle("pallete-menu-toggle");
});

closePalleteMenuBtn.addEventListener("click", () => {
  palleteMenu.classList.toggle("pallete-menu-toggle");
});

addTodo.addEventListener("click", () => {
  console.log("Clicked");
});
