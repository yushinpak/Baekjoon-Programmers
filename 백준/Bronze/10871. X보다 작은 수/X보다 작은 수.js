const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let array1 = input[0].split(' ').map(Number);
let array2 = input[1].split(' ').map(Number);

let num = array1[0];
let X = array1[1];

let answer = [];

for (let i = 0; i < num; i++) {
    if (array2[i] < X) {
        answer.push(array2[i])
    }
}

console.log(answer.join(' '));