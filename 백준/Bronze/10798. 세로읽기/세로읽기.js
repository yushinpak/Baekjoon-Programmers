const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "10798/input2.txt"
  )
  .toString()
  .split("\n");

// 가장 긴 배열 발견해서 length 받아오기
let lengthArray = [];
input.forEach((array) => {
  lengthArray.push(array.length);
});
const maxLength = Math.max(...lengthArray);

// while문 사용하여 count로 index 지정하기
let answer = "";
let index = 0;
while (index <= maxLength - 1) {
  for (let array = 0; array < input.length; array++) {
    if (input[array][index]) {
      answer += input[array][index];
    }
  }
  index++;
}

console.log(answer);
