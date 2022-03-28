"use strict";

const todoInpForm = document.querySelector(".todo-inp");
const todoInp = document.querySelector("#todo-selection");
const todoContainer = document.querySelector(".todo-list");
const todoList = [];

todoInpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  todoList.push(todoInp.value);
  console.log(todoList);

  const html = `<div class="todo-item">
  <h1>${todoInp.value}</h1>
  <button>Delete</button>
  </div>`;
  if (todoInp.value.length === 0) {
    alert("Cannot add empty value");
  } else {
    todoContainer.insertAdjacentHTML("afterbegin", html);
  }

  todoInp.value = "";
});
