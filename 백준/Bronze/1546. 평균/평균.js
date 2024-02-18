const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "1546/input_8.txt"
    )
    .toString()
    .trim()
    .split("\n")

const num = input[0]; // 과목의 수
let score = input[1].split(' ').map(Number);

score.sort(function(a, b) {
    return b - a;
});

let maxScore = score[0];
let answer = 0; 

score.forEach((el) => {
    const newNum = el/maxScore*100
    answer += newNum;
})

console.log(answer/num);