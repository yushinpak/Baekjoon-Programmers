const input = require("fs")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "11005/input.txt")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "11005/input2.txt"
  )
  .toString()
  .trim()
  .split("\n");

let [N, B] = input[0].split(" ").map(Number);

let quotient = N,
  remainder = 0,
  result = [];

let answer = "";
if (B === 10) {
  answer = N;
} else {
  while (quotient >= B || quotient === N) {
    remainder = quotient % B;
    quotient = Math.floor(quotient / B);
    // console.log("나머지", remainder);
    // console.log("몫", quotient);
    result.push(remainder);
  }
  // console.log("마지막 몫", quotient);
  if (quotient !== 0) {
    result.push(quotient);
  }
  result.reverse();

  for (let element of result) {
    if (element >= 10) {
      element = String.fromCharCode(element + 55);
    }
    answer += element;
  }
}

console.log(answer);
