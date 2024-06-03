const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2750/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
input.forEach((el) => {
  sum += el;
});

console.log(sum / 5);
console.log(input.sort((a, b) => a - b)[2]);
