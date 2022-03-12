"use strict";

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const overlayBody = document.querySelector(".overlay-body");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open-mobile-menu");
  overlayBody.classList.add("overlay-body-enable");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open-mobile-menu");
  overlayBody.classList.remove("overlay-body-enable");
});
