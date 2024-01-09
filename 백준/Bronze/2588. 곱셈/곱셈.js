const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//input에 각 줄이 배열 자료형으로 담기므로 각 줄에 접근하려면 인덱싱으로 접근

let arr = input[1].split('').map(Number)




const first = arr[2];
const second = arr[1];
const third = arr[0];

console.log(input[0]*first)
console.log(input[0]*second)
console.log(input[0]*third)
console.log(input[0]*first + input[0]*second*10 + input[0]*third*100)