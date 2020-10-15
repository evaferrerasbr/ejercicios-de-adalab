"use strict";
const inputSearch = document.querySelector(".js-inputSearch");
console.log(inputSearch);
function getUserInfo() {
  let username = inputSearch.value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector("js-name");
      const img = document.querySelector("js-img");
      const repositories = document.querySelector("js-repositories");
      name.innerHTML = data.login;
      img.src = data.avatar_url;
      img.alt = "Una usuaria de Github";
      repositories.innerHTML = data.public_repos;
    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getUserInfo);
