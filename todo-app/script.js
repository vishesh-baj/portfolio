"use-strict";

const closeButton = document.querySelector("#close-menu");
const openButton = document.querySelector(".open-menu");
const sideMenu = document.querySelector(".menu");
const createTodoBtn = document.querySelector(".create-todo-btn");
const todoContainer = document.querySelector(".todo-wrapper");
const todosList = [];

const createTodos = () => {
  const html = ` <div class="todo">
          <input placeholder="TODO NAME" type="text" />
          <i class="fa-solid fa-circle-check"></i>
        </div>`;

  todoContainer.insertAdjacentHTML("afterbegin", html);
};

openButton.addEventListener("click", () => {
  sideMenu.classList.add("sidemenu-toggler");
});

closeButton.addEventListener("click", () => {
  sideMenu.classList.remove("sidemenu-toggler");
});

createTodoBtn.addEventListener("click", createTodos);
