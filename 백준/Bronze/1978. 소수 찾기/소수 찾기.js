const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1978/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const numArray = input[0].split(" ").map(Number);

let answer = 0;

numArray.forEach((num) => {
  if (num !== 1) {
    let factorArr = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factorArr.push(i);
      } 
    }

    if (factorArr.length == 2) {
      answer += 1;
    }
  }
});

console.log(answer);
