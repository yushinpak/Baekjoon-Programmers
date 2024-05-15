const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2566/input.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((el, index, input) => {
  input[index] = el.split(' ').map(Number);
});


let maximumValue =input[0][0]; // 초기값
let maximumValueLocation = [0+1, 0+1]

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++){
    if (maximumValue < input[i][j]) {
      maximumValue = input[i][j];
      maximumValueLocation = [i+1, j+1]
    }
  }
}

console.log(maximumValue.toString());
console.log(maximumValueLocation.join(' '))