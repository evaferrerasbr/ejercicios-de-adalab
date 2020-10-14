"use strict";

function getTree(height) {
  let line = "";
  for (let i = 1; i <= height; i++) {
    line = line += "▲";
    console.log(line);
  }
}

getTree(7);
