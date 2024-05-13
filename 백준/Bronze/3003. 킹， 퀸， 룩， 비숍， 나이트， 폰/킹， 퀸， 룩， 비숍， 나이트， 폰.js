const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "3003/input2.txt")
  .toString()
  .trim();

const answerArray = [1, 1, 2, 2, 2, 8]
const array = input.split(' ').map(Number);
const result = [];

for(let i = 0; i < answerArray.length; i++ ) {
  result.push(answerArray[i] - array[i]);
}

console.log(result.join(' '))