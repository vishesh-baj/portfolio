"use strict";

const calculationInput = document.querySelector("#calculation-inp");
const operatorBtns = document.querySelectorAll(".operator-btn");
const numbersBtns = document.querySelectorAll(".numbers-btn");
const equalToBtn = document.querySelector(".equal-to");

function evil(fn) {
  return new Function("return " + fn)();
}

numbersBtns.forEach((number) =>
  number.addEventListener("click", () => {
    if (number.textContent === "=") return;
    calculationInput.value += number.textContent;
  })
);

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculationInput.value += operator.textContent;
  });
});

equalToBtn.addEventListener("click", () => {
  let ans = eval(calculationInput.value);
  calculationInput.value = ans;
});
