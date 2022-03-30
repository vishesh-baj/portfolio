"use strict";

const randomizeBtn = document.querySelector(".randomize-btn");
const copyBtn = document.querySelector(".copy-btn");
const colors = document.querySelectorAll(".color");

let generatedArr;

// ? generate random color array

const generateColorsArr = () => {
  // generate  a random color
  const generateColor = () => {
    const letters = "0123456789ABCDEF";

    let iterator = 0;
    let colorCode = "#";
    while (iterator < 6) {
      const randomNumber = Math.trunc(Math.random() * letters.length);
      colorCode += letters[randomNumber];
      iterator += 1;
    }

    return colorCode;
  };
  const colorsArr = [];
  for (let index = 1; index < generateColor().length; index++) {
    colorsArr.push(generateColor());
  }
  return colorsArr;
};

const displayColors = () => {
  const colorArr = generateColorsArr();
  colors.forEach((color, idx) => {
    color.style.backgroundColor = colorArr[idx];
  });
  generatedArr = colorArr;

  return generatedArr;
};

const copyColors = () => {
  let copyTemplate = "";
  generatedArr.forEach(
    (color, idx) => (copyTemplate += `Color-${idx + 1}, Tag:${color}\n`)
  );

  navigator.clipboard.writeText(copyTemplate);
};

// ** event listeners
randomizeBtn.addEventListener("click", displayColors);
copyBtn.addEventListener("click", copyColors);
