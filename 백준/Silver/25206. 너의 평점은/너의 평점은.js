const input = require("fs")
  .readFileSync(
    // process.platform === "linux" ? "/dev/stdin" : "25206/input.txt"
    // process.platform === "linux" ? "/dev/stdin" : "25206/input2.txt"
    // process.platform === "linux" ? "/dev/stdin" : "25206/input3.txt"
    process.platform === "linux" ? "/dev/stdin" : "25206/input4.txt"
  )
  .toString()
  .trim()
  .split("\n");
  
const score = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let total_score = 0; //학점의 총합
let temp_answer = 0; // 학점x과목평점의 합

for (let i = 0; i < input.length; i++) {
  let temp_arr = input[i].split(" ");
  let key = temp_arr[2];

  if (temp_arr[2] !== "P") {
    temp_answer += score[key] * temp_arr[1];
    total_score += Number(temp_arr[1]);
  }
}

console.log((temp_answer / total_score).toFixed(6));