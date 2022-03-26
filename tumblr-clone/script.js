"use strict";

const profileBtn = document.querySelector(".profile-container");
const profileContainer = document.querySelector(".profile-popup-container");
const arrow = document.querySelector("#arrow");
const hero = document.querySelector(".hero");
profileBtn.addEventListener("click", () => {
  profileContainer.classList.toggle("hidden");
  const isHidden = profileContainer.classList.contains("hidden");
  arrow.className = "fa-solid";
  isHidden
    ? arrow.classList.add("fa-arrow-down")
    : arrow.classList.add("fa-arrow-up");
});

hero.addEventListener("click", () => profileContainer.classList.add("hidden"));
