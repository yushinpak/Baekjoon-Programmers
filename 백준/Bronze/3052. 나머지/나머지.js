const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "3052/input_2.txt"
    )
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let arr = [];

//0. 배열 만들기
for (let i = 0; i < 10; i++) {
    arr.push(input[i]%42);
}

//1. 배열 안에서 중복값을 제거하고 2. 배열 안에 남은 개수를 세면됨
//사용해볼 방법은 세 가지

//1st forEach(), includes()
// let answerArr = [];
// arr.forEach((el) => {
//     if(!answerArr.includes(el)){
//         answerArr.push(el);
//     }
// })



//2nd Set - Set를 배열로 되돌릴 때 전개연산자 사용
// let set = new Set(arr);
// let answerArr = [...set]; 


//3rd indexOf(), filter()

let answerArr = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
})

//필터는 중복 제거의 역할을 함
//콜백함수는 indexOf(element)는 input에서 첫 번째 발생한 값을 나타내므로, 그 값이 index와 일치하지 않는다면 이미 그 값이 발생했던 것 

console.log(answerArr.length);
