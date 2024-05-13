const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "10809/input.txt")
  .toString()
  .trim()
  .split("");

// 내 풀이 방법의 문제점
// - 굳이 객체를 사용할 필요 없이 출력이 배열이므로 처음부터 배열로 넣어도 됨
// - 수작업으로 코드를 넣기보다 최대한 split 등을 사용해 하드코딩을 줄일 수 있는 방법을 고민할 것
// - 존재하지 않는 알파벳에 -1이 들어가도록 하라는 문제의 숨은 뜻 = indexOf 메서드를 사용하라는 것

// 더 공부가 필요한 부분 - 아스키코드

// 삼항연산자를 좀 더 활용할 필요가 있음

// 1. 원래 푼 방식 -> 객체에 모든 알파벳을 프로퍼티로 넣어 등장 시 변환
let alphabet = {
  a: -1,
  b: -1,
  c: -1,
  d: -1,
  e: -1,
  f: -1,
  g: -1,
  h: -1,
  i: -1,
  j: -1,
  k: -1,
  l: -1,
  m: -1,
  n: -1,
  o: -1,
  p: -1,
  q: -1,
  r: -1,
  s: -1,
  t: -1,
  u: -1,
  v: -1,
  w: -1,
  x: -1,
  y: -1,
  z: -1,
};

for (let i = 0; i < input.length; i++) {
  if (alphabet[input[i]] === -1) {
    alphabet[input[i]] = i;
  }
}

const answerArray = Object.values(alphabet);
console.log(answerArray.join(' '));

// 2. 다른 풀이(내 풀이가 자동화&간소화된 업그레이드 버전)
const alpahbet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alpahbet);

let result = alpahbet.map(element => input.indexOf(element));

console.log(result.join(' '));

// +) 배열 만들 때 a, b, c, d로 할 필요 없음
// const arr = new Array(26).fill(-1);
// 간단!
