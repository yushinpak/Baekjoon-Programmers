const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "1152/input.txt"
    )
    .toString()
    .trim()
    .split(' ');

//시도한 풀이 if문 / 삼항연산자 사용 / for문으로 세어보기 / forEach문으로 세어보기

//첫번째 시도한 풀이(맨첫문자 ''경우 제거)
// let answer = input.length

// if (input[0] === '') {
// answer -= 1
// }

// console.log(answer)

//2번 - 삼항연산자 사용해보기

// input[0] === ""
//     ? console.log(input.length - 1)
//     : console.log(input.length)

//3번 - for문으로 세어보기

// let answer_num = 0;

// for(let i = 0; i < input.length;  i++){
//     if (input[i] !== ''){
//     answer_num++
//     }
// }

// console.log(answer_num)

//마지막 - forEach 문으로 바꿔보기
let answer_num = 0;
input.forEach( (el) => {
    if (el !== ''){
    answer_num++
    }
})
console.log(answer_num);
