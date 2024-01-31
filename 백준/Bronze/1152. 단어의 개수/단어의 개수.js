const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "1152/input.txt"
    )
    .toString()
    .trim()
    .split(' ');



let answer = input.length

if (input[0] === '') {
    answer -= 1
}

if (input[0] === ' ') {
    answer -= 1
} 

if (input[input.length-1] === ' '){
    answer -= 1
}

console.log(answer)