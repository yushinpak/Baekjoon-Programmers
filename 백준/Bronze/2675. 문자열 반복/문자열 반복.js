const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "2675/input.txt"
    )
    .toString()
    .trim()
    .split("\n");

//방법1. 문자열 출력 for문 사용해서
// const lineNum = Number(input[0]);
// for(let i = 1; i <= lineNum; i++) {
//     let arr = input[i].split(' ')
//     , repeatNum = Number(arr[0])
//     , string = arr[1].split('');

//     let answer = [];

//     for (let j = 0; j < string.length; j++) {
//     answer.push([string[j].repeat(repeatNum)])
//     }
//     console.log(answer.join(''));
// }

//방법2. forEach로 바꿔보기 - forEach 구문 사용해서 문자열 배열에 넣고 출력하기
input.shift(); //첫번째 값 삭제

input.forEach((el) => {
    let arr = el.split(' ')
    , repeatNum = Number(arr[0])
    , string = arr[1].split('');

    let answer = [];

    string.forEach((el2) => {
        answer.push(el2.repeat(repeatNum))
    })
    console.log(answer.join(''));
})
