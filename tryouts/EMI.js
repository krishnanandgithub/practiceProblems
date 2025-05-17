const prin = prompt("enter principle");
const rate = prompt("enter rate");
const year = prompt("enter year");

const p = Number(prin);
const r = Number(rate) / 1200;
const n = Number(year) * 12;

console.log((p * r * (1 + r) ** n) / ((1 + r) ** n - 1));
