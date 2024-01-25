const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "9086/input_1.txt"
    )
    .toString()
    .trim()
    .split("\n");

//문제해석: 각 문자열의 첫 글자와 마지막 글자를 연속하여 출력

//답안1 - for문 사용
// const num = Number(input[0]);

// for(let i = 1; i <= num; i++) {
//     let temp = input[i].split('');
//     let A = temp[0]
//         ,B = temp[temp.length-1];
//     console.log(A+B)
// }

//답안2 - forEach문 사용
let first_words = input.shift();//조심해야할 것은 배열에서 값을 제거하고 남은 배열의 값들을 리턴 x 제거한 값을 리턴!

input.forEach((el) => {
    let temp = el.split('');
    let A = temp[0]
        ,B = temp[temp.length-1];
    console.log(A+B)
}
)