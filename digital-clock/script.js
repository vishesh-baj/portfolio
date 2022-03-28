"use strict";

const clock = document.querySelector(".clock");
const btnDark = document.querySelector(".dark");
const btnLight = document.querySelector(".light");
const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
setInterval(() => {
  clock.textContent = `${Intl.DateTimeFormat(
    navigator.language,
    options
  ).format()}`;
}, 1000);

btnDark.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffd166";
  clock.style.color = "black";

  btnDark.classList.add("hidden");
  btnLight.classList.remove("hidden");
});

btnLight.addEventListener("click", () => {
  document.body.style.backgroundColor = "#001219";
  clock.style.color = "teal";
  btnLight.classList.add("hidden");
  btnDark.classList.remove("hidden");
});
