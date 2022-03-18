"use-strict";

const closeButton = document.querySelector("#close-menu");
const openButton = document.querySelector(".open-menu");
const sideMenu = document.querySelector(".menu");
const createTodoBtn = document.querySelector(".create-todo-btn");
const todoContainer = document.querySelector(".todo-wrapper");
const todoInput = document.querySelector(".todo-input");

const todosList = [];

openButton.addEventListener("click", () => {
  sideMenu.classList.add("sidemenu-toggler");
});

closeButton.addEventListener("click", () => {
  sideMenu.classList.remove("sidemenu-toggler");
});

createTodoBtn.addEventListener("click", () => {
  todoContainer.classList.toggle("todo-container-hide");
});
