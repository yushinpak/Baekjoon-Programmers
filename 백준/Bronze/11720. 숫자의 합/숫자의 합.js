const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "./input.txt"
    )
    .toString()
    .trim()
    .split("\n");

const num = input[0];
const arr = input[1].toString().split('');
let answer = 0;

arr.forEach((el)=>{
    answer += Number(el)
})

console.log(answer)