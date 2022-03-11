"use strict";

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open-mobile-menu");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open-mobile-menu");
});
