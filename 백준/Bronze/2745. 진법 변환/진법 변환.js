const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2745/input.txt")
  .toString()
  .trim()
  .split("\n");

// 새로 배운 것 - 자바스크립트 내장 함수 isNaN();

// 1. 좌변의 N 숫자 알아내기
let N = input[0].split(" ")[0];
const B = Number(input[0].split(" ")[1]);

let alphabetNumber = {};
for (i = 65; i <= 90; i++) {
  const alphabet = String.fromCharCode(i);
  alphabetNumber[alphabet] = i - 55; // 객체에 알파벳-숫자 쌍 추가
}

// 2. N을 한 자리씩 순회하며 (1) 알파벳 -> 숫자, 숫자 -> 넘버타입 바꾸고 (2)B에 자릿수 승 곱하여 더하기
let answer = 0;
for (i = 0; i < N.length; i++) {
  const B_exponent = N.length - 1 - i;

  if (isNaN(N[i]) === true) {
    answer += alphabetNumber[N[i]] * Math.pow(B, B_exponent);
  } else {
    answer += Number(N[i]) * Math.pow(B, B_exponent);
  }
}

console.log(answer);
