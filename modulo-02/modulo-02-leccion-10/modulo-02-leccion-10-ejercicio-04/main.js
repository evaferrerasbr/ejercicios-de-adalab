"use strict";

const btn = document.querySelector(".js-btn");
const list = document.querySelector(".js-list");
let orgname = document.querySelector(".js-input").value;

function getRepo() {
  fetch(`https://api.github.com/orgs/${orgname}`)
    .then((orgResponse) => orgResponse.json())
    .then((orgData) => {
      const data = orgData.repos_url;
      return fetch(
        `https://dog.ceo/https://api.github.com/orgs/${orgname}` + data[0]
      );
    })
    .then((repoResponse) => repoResponse.json())
    .then((repoData) => {
      const repo = repoData.name;
      let ulContent = "";
      for (const repoName of repo) {
        const repoContent = `<li>${repoName}</li>`;
        ulContent += repoContent;
      }
      list.innerHTML = ulContent;
    });
}

btn.addEventListener("click", getRepo);
