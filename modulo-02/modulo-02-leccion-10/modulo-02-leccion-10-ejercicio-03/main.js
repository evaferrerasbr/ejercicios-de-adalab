"use strict";

const btn = document.querySelector(".js-btn");

let username = document.querySelector(".js-inputSearch").value;

function getUserInfo() {
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

btn.addEventListener("click", getUserInfo);
