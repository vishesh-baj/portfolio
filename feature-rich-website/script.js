"use strict";

///////////////////////////////////////
// Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const header = document.querySelector(".header");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
const imgTargets = document.querySelectorAll("img[data-src]");
const allSections = document.querySelectorAll(".section");
// _______________________________________________________

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// _______________________________________________________

// !NOT WORKING
const handleHover = (e) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((sibling) => {
      if (sibling !== link) sibling.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// {assing argument in handler}
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// _______________________________________________________

// ?MAKE NAVIGATION STICKY
// ** observer interaction api way
const stickyNavigation = () => {
  const navHeight = nav.getBoundingClientRect().height;
  const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
    } else nav.classList.remove("sticky");
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(header);
};
// _______________________________________________________

// ?ADD ANIMATIONS TO SECTION REVEAL IT
const sectionsRevealFunc = () => {
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });
  allSections.forEach((section) => {
    sectionObserver.observe(section);
    // section.classList.add("section--hidden");
  });
};
// _______________________________________________________

// ? LAZY LOADING IMAGES
const lazyLoader = () => {
  const loadImg = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    // Replace src attribure with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
  };
  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
  });
  imgTargets.forEach((img) => imgObserver.observe(img));
};
// _______________________________________________________

// ? SLIDER LOGIC
let currentSlide = 0;
const sliders = () => {
  const maxSlide = slides.length;

  // ? GO TO SLIDE

  const goToSlide = (slide) => {
    slides.forEach(
      (s, idx) => (s.style.transform = `translateX(${100 * (idx - slide)}%)`)
    );
  };
  // ? NEXT SLIDE
  const nextSlide = () => {
    currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  // ? PREVIOUS SLIDE
  const prevSlide = () => {
    currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // ? DOTS FOR SLIDER
  const createDots = () => {
    slides.forEach((_, idx) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide=${idx}></button>`
      );
    });
  };

  //  ? ACTIVATE DOT
  const activateDot = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  // ? INIT FUNCTION
  const init = () => {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
    activateDot(0);
  });
  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

// ** ----------APP-INITIALIZER-------------
const initializeApp = () => {
  stickyNavigation();
  sectionsRevealFunc();
  lazyLoader();
  sliders();
};

initializeApp();
// _______________________________________________________

// EVENT HANDLERS

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// _______________________________________________________

// ? SCROLL
btnScrollTo.addEventListener("click", (e) => {
  // ** MODERN WAY
  section1.scrollIntoView({ behavior: "smooth" });

  // ** OLD SCHOOL WAY
  // const s1Coords = section1.getBoundingClientRect();
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
});
// _______________________________________________________

// ?TABS

tabContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  // ** guard clause
  if (!clicked) return;
  // ** Active tab
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  // Active tab content
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  clicked.classList.add("operations__tab--active");

  // ** Active content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
btnScrollTo.addEventListener("click", (e) => {
  // ** MODERN WAY
  section1.scrollIntoView({ behavior: "smooth" });

  // ** OLD SCHOOL WAY
  // const s1Coords = section1.getBoundingClientRect();
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
});
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

// ? EVENTS

// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", function () {
//   alert("Add Event Listener: Great");
// });
// //** Onevent old school way
// h1.onmouseenter = function () {
//   alert("Add Event Listener: Greatsss");
// };

// ? DOM TRAVERSING
// const h1 = document.querySelector("h1");

// // Going Downwards: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log((h1.firstElementChild.style.color = "white"));
// console.log((h1.lastElementChild.style.color = "orangered"));

// // Going updards: Parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);
// // opposite of querryselectorall
// console.log(
//   (h1.closest(".header").style.background = "var( --gradient-secondary)")
// );

// // Going Sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);

// ? INTERSECTION OBSERVER API

// ** this api allows coe to observe changes to which a targegt element intersects another element

// const observerCallback = (entries, observer) => {
//   entries.forEach((entry) => console.log(entry));
// };

// const obsOptions = {
//   // root = null, its a viewport
//   root: null,
//   threshold: 0.05,
// };
// const observer = new IntersectionObserver(observerCallback, obsOptions);
// observer.observe(section1);
