const fs = require("fs");

const readInput = (filePath) => {
  return fs.readFileSync(filePath).toString().split("\n");
};

const findMaxLength = (input) => {
  return Math.max(...input.map(line => line.length));
};

const createAnswerString = (input, maxLength) => {
  let answer = "";
  for (let index = 0; index < maxLength; index++) {
    for (let line of input) {
      if (line[index]) {
        answer += line[index];
      }
    }
  }
  return answer;
};

const input = readInput(process.platform === "linux" ? "/dev/stdin" : "10798/input2.txt");
const maxLength = findMaxLength(input);
const answer = createAnswerString(input, maxLength);

console.log(answer);
