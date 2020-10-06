"use strict";

const paragraph = document.querySelector(".text--visible");
const paragraphHidden = document.querySelector(".text--hidden");

function addParagraph() {
  if (paragraphHidden.classList.contains("text--hidden")) {
    paragraphHidden.classList.remove("text--hidden");
  }
}

paragraph.addEventListener("mouseover", addParagraph);
