const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2292/input.txt")
  .toString()
  .trim();

const inputNum = Number(input);
let lastNum = 1;
let i = 1;

if (inputNum === 1) {
  console.log(1);
} else {
  while (lastNum < inputNum) {
    lastNum += 6 * i;
    i++;
  }
  console.log(i);
}
