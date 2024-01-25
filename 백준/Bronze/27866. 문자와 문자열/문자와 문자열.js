const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "27866/input_3.txt"
    )
    .toString()
    .trim()
    .split("\n");

const word = input[0].split('');
const num = Number(input[1]) - 1;

console.log(word[num])
