"use-strict";

const closeButton = document.querySelector("#close-menu");
const openButton = document.querySelector(".open-menu");
const sideMenu = document.querySelector(".menu");

openButton.addEventListener("click", () => {
  sideMenu.classList.add("sidemenu-toggler");
});

closeButton.addEventListener("click", () => {
  sideMenu.classList.remove("sidemenu-toggler");
});
