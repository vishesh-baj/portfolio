"use strict";

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const counter = document.querySelector(".stop-counter");

let time;
let timer;
const tick = () => {
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(time % 60).padStart(2, 0);
  // In each call, print remaining time to UI
  counter.textContent = `${min}:${sec}`;
  // Increase time
  time++;
};
const startWatch = () => {
  time = 1;
  timer = setInterval(tick, 1000);
  startBtn.setAttribute("disabled", true);
  return timer;
};

const stopWatch = () => {
  clearInterval(timer);
};
const resetWatch = () => {
  counter.textContent = "00:00";
  startBtn.removeAttribute("disabled");
};

startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);
