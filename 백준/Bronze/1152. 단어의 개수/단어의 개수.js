const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "1152/input.txt"
    )
    .toString()
    .trim()
    .split(' ');


//첫번째 시도한 풀이(맨첫문자 ''경우 제거)
// let answer = input.length

// if (input[0] === '') {
// answer -= 1
// }

// console.log(answer)

//2번 - 삼항연산자 사용해보기


input[0] === "" ? console.log(input.length - 1) : console.log(input.length)