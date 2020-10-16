"use strict";

const btn = document.querySelector(".js-btn");
const list = document.querySelector(".js-list");

function getRepo(event) {
  event.preventDefault();
  let orgname = document.querySelector(".js-input").value;
  fetch(`https://api.github.com/orgs/${orgname}`)
    .then((orgResponse) => orgResponse.json())
    .then((orgData) => {
      const data = orgData.repos_url;
      return fetch(data);
    })
    .then((repoResponse) => repoResponse.json())
    .then((repoData) => {
      let ulContent = "";
      for (let i = 0; i < repoData.length; i++) {
        let liContent = `<li>${repoData[i].name}</li>`;
        ulContent += liContent;
      }
      list.innerHTML = ulContent;
    });
}

btn.addEventListener("click", getRepo);
