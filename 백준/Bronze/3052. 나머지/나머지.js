const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "3052/input_3.txt"
    )
    .toString()
    .trim()
    .split("\n")
    .map(Number);

//배열 안에서 중복값을 제거하는 방법 or 중복값 세는 방법


let arr = [];

//0. 배열 만들기
for (let i = 0; i < 10; i++) {
    arr.push(input[i]%42);
}

//1. 배열 안에서 중복값을 제거하고 2. 배열 안에 남은 개수를 세면됨
let answerArr = [];
arr.forEach((el) => {
    if(!answerArr.includes(el)){
        answerArr.push(el);
    }
})

console.log(answerArr.length);
