const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2941/input.txt")
  .toString()
  .trim();

// 내 풀이 - 거의 하드코딩. 이외의 방법 생각 못함

// 내가 몰랐던 것 - (1) replaceAll 메서드 (2) for of문 
// reduce - 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환
// 인수 - accumulator(callback 함수의 반환값을 누적), currentValue, index, array
// replaceAll - pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환
// 인수 - pattern, replacement

// 특히     words = words.split(i).join("A"); -> 이렇게 하면 '대체'와 똑같은 결과 낼 수 있음!


let answer = input.length;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "d") {
    if (input[i + 1] === "z" && input[i + 2] === "=") {
      answer -= 2;
    } else if (input[i + 1] === "-") {
      answer -= 1;
    }
  } else if (input[i] === "c") {
    if (input[i + 1] === "=") {
      answer -= 1;
    } else if (input[i + 1] === "-") {
      answer -= 1;
    }
  } else if (input[i] === "l" && input[i + 1] === "j") {
    answer -= 1;
  } else if (input[i] === "n" && input[i + 1] === "j") {
    answer -= 1;
  } else if (input[i] === "s" && input[i + 1] === "=") {
    answer -= 1;
  } else if (input[i] === "z" && input[i + 1] === "=" && input[i - 1] !== "d") {
    answer -= 1;
  }
}

console.log(answer);

// 다른 풀이 - reduce, replaceAll 사용
console.log('c= c- dz= d- lj nj s= z='.split(' ').reduce((a,v,i)=>a.replaceAll(v,i),(require('fs').readFileSync(0)+"").trim()).length)

// 다른 풀이 - for of문 사용

const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim();

const croatia = [ "c=" , "c-" , "dz=" , "d-", "lj", "nj", "s=", "z="];
let words = input;

for (let i of croatia) {
    words = words.split(i).join("A");
}

console.log(words.length);

// 다른 풀이 - replaceAll 사용
const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const alphabet = ['c=','c-','dz=','d-','lj','nj','s=','z=']

let modifiedWrod = input;
alphabet.forEach(alpha => {
    modifiedWrod = modifiedWrod.replaceAll(alpha, 'X')
})

console.log(modifiedWrod.length)
