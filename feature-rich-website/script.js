"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((modalBtn) =>
  modalBtn.addEventListener("click", openModal)
);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// smooth scroll
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  // OLD SCHOOL WAY
  const s1Coords = section1.getBoundingClientRect();
  // console.log(e.target.getBoundingClientRect());
  // console.log(
  //   `Current Scroll (X/Y) ${(window.pageXOffset, window.pageYOffset)}`
  // );

  // // smooth scroll
  // window.scrollTo({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // MODERN WAY
  section1.scrollIntoView({ behavior: "smooth" });
});

// ///////////////////////////////////////////////////////////////////

// SELECTING CREATING AND DELETING ELEMENTS

// // ** selecting entire document
// console.log(document.documentElement);
// // ** selecting head of document
// console.log(document.head);
// // ** selecting body of document
// console.log(document.body);

// document.getElementById("section--1");
// const header = document.querySelector(".header");

// //  ? Creates Nodelist, values dont change
// const allSections = document.querySelectorAll(".section");
// // console.log(allSections);

// // ? Creates html collection, hence change the values in real time
// const allButtons = document.getElementsByTagName("button");
// // console.log(allButtons);

// document.getElementsByClassName("btn");

// // ** CREATING AND INSERTING ELEMENTS

// // ? DOM OBJECT
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent =
// //   "We use Cookies for improved functionality and anallytics";
// message.innerHTML = `We use Cookies for improved functionality and anallytics. <button class="btn btn--close-cookie">Got It</button>`;
// // console.log(message);

// // ** first child of parent
// header.prepend(message);
// // ** last child of parent
// // header.append(message);
// // ** copy the element to use it in other positions in dom
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // ?DELETE ELEMENTS
// document.querySelector(".btn--close-cookie").addEventListener("click", () => {
//   message.remove();
// });

// // ///////////////////////////////////////////////////////////////////////

// // ? STYLES ATTRIBUTES AND CLASSES

// // STYLES

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// //** Get computed styles from stylesheet
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// // ** Change variables in stylesheet
// document.documentElement.style.setProperty("--color-primary", "orange");

// // ATTRIBUTES
// const logo = document.querySelector(".nav__logo");

// // Changing attributes
// logo.alt = "Beautiful Minimalist Logo";
// console.log(logo.alt);

// logo.setAttribute("company", "Bankist");
// // relative link
// console.log(logo.getAttribute("src"));
// // absolute links
// console.log(logo.src);

// // ** Data attributes
// console.log(logo.dataset.versionNumber);

// // CLASSES
// logo.classList.add("c", "d");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c");
