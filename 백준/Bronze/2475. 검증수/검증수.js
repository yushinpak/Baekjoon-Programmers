const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2475/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let sum = 0;
input.forEach((el) => {
  sum += el*el;
})

console.log(sum%10)