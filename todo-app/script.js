"use strict";

const todoInput = document.querySelector("#todo-name");
const todoSubmit = document.querySelector(".todo-form");
const todoContainer = document.querySelector(".todos");
let todos = [];

const displayTodos = (todoList) => {
  todoContainer.innerHTML = "";
  todoList.forEach((todoItem) => {
    const html = `<div class="todo">
              <h3>${todoItem}</h3>
              <div class="options">
                <i class="checkced fa-solid fa-check"></i>
                <i class="delete fa-solid fa-trash-can"></i>
              </div>
            </div>`;
    todoContainer.insertAdjacentHTML("afterbegin", html);
  });
};

const addTodo = (todoList) => {
  todoList.push(todoInput.value);
  console.log(todos);
};

todoSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(todos);
  displayTodos(todos);
  todoInput.value = "";
});
