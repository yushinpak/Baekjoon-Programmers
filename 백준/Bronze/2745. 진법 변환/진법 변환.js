const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2745/input.txt")
  .toString()
  .trim()
  .split("\n");

// 내 풀이 - 아스키코드로 객체 안에 프로퍼티 쌍 만들어 넣고, 찾아서 변환 후 계산 
// 다른 풀이 - parseInt(string, radix); string: 정수, radix: 진수
// 주의사항은 기본값이 10이아니라 radix는 optional이고 비어있을 시 숫자만 추출해서 변환
// 다른 풀이 - reduce함수 사용

// 새로 배운 것 - 자바스크립트 내장 함수 isNaN();
// 현재 상태가 NaN인지 판별하는 것이 아니라 변환될 수 있는 '가능성'을 이야기하는 것. 
// 가능성이 없으면 true, 있으면 false

// 1. 좌변의 N 숫자 알아내기
let N = input[0].split(" ")[0];
const B = Number(input[0].split(" ")[1]);

// 더 간결한 코드
// let [N, B] = input[0].split(" ");
// B = NumberB;

let alphabetNumber = {};
for (i = 65; i <= 90; i++) {
  const alphabet = String.fromCharCode(i);
  alphabetNumber[alphabet] = i - 55; // 객체에 알파벳-숫자 쌍 추가
}

// 더 간결한 코드
// 유지보수를 위해 i는 최대한 의미 있는 숫자(0이나 length)로 맞추는 것이 좋음
// for (i = 0; i <= 35; i++) {
//   if (i < 10) {
//     alphabetNumber[i] = i;
//   } else {
//     alphabetNumber[String.fromCharCode(i + 55)] = i;
//   }
// }

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

// 더 간결한 코드
// 유지보수를 위해 N[i]같은 특수한 값의 경우 변수를 붙여주는 것이 좋음
// for (let i = 0; i < N.length; i++) {
//   const digit = N[i];
//   const B_exponent = N.length - 1 - i;

//   if (isNaN(digit)) {
//     answer += alphabetNumber[digit] * Math.pow(B, B_exponent);
//   } else {
//     answer += Number(digit) * Math.pow(B, B_exponent);
//   }
// }

console.log(answer);

// 다른 풀이 
const fs = require('fs');
const [n, b] = fs.readFileSync(0, 'utf-8').trim().split(' ');

let result = 0;
result = [...n].reverse().reduce((acc, cur, idx) => {
    if (isNaN(Number(cur))) {
        const num = cur.charCodeAt() - 'A'.charCodeAt() + 10;
        return acc + (b ** idx * num);
    }
    return acc + (b ** idx * cur);
}, result);

console.log(result);

