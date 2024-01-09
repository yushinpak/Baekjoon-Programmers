const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1].split(' ')

arr.sort((a, b) => a - b);

console.log(Number(arr[0]), Number(arr[arr.length-1]))