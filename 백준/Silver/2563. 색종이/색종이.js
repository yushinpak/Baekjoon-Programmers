const fs = require("fs");

const readInput = (filePath) => {
  return fs.readFileSync(filePath).toString().trim().split("\n").slice(1);
};

const createAnswer = (input) => {
  let paintedCell = [];
  input.forEach((el) => {
    const [startingPoint_X, startingPoint_Y] = el.split(" ").map(Number);
    for (let x = startingPoint_X; x < startingPoint_X + 10; x++) {
      for (let y = startingPoint_Y; y < startingPoint_Y + 10; y++) {
        const coordinate = `${x},${y}`;
        if (paintedCell.indexOf(coordinate) === -1) {
          paintedCell.push(coordinate);
        }
      }
    }
  });
  return (paintedCell.length)
};

const input = readInput(
  process.platform === "linux" ? "/dev/stdin" : "2563/input.txt"
);
const answer = createAnswer(input);
console.log(answer)