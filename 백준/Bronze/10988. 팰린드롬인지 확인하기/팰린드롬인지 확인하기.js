const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "10988/input2.txt"
    )
    .toString()
    .trim()
    .split(""); 

const wordLength = input.length;

let answer = 0;

for (let i = 0; i <= Math.floor(input.length/2); i++) {
    if (input[i] !== input[input.length-1-i]) {
        answer = 0;
        break;
    } else {
        answer = 1;
    }
}

console.log(answer);