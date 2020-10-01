"use strict";

const total = 128;
const ana = total / 9 + 2;
console.log(ana);
const anaWithTips = Math.ceil(ana);
console.log(anaWithTips);
const others = (total - ana) / 8;
console.log(others);
const othersWithTips = Math.ceil(others);
console.log(othersWithTips);
