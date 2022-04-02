"use strict";

const form = document.querySelector(".form");
const searchInput = document.querySelector("#search-inp");
const definitionsContainer = document.querySelector(".definations-wrapper");
const displayDefinations = (definitions) => {
  definitions.forEach((definition) => {
    const html = `
   <div class="defination-container">
          <h2 class="defination">
           ${definition.definition}
            nobis.
          </h2>
        </div>
  `;
    definitionsContainer.insertAdjacentHTML("beforeend", html);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchInput.value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayDefinations(data[0].meanings[0].definitions));
});
