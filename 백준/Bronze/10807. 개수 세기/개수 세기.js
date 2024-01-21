const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let targetNum = Number(input[2]);
let answer = 0;

for (let i = 0; i < num; i++) {
    
    if (arr[i] === targetNum) {
        answer++
    }
}

console.log(answer);