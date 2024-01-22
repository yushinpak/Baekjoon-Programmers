let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

//내 풀이
input.sort((a, b) => a - b)

for (let i = 1; i <= 30; i++){ 
    let num = i;
    if (!input.includes(num)) {
        console.log(num)
    }
}

//<오답노트>

// for (let i = 1; i <= 30; i++){ 
//     let num = 'i';
//     if (new_input.indexOf(num) === -1 ) {
//         answer.push(num)
//     }

//이 부분이 계속 오류가 나고 이상했는데 문자열 'i' = 'i'이고, 내가 표현하려던 바는 let num = i.toString()으로 해야함

//그래서 원하던 답으로 수정하면

// let fs = require('fs');
// let input = fs.readFileSync('./5597/example.txt').toString().split('\n').map(Number);

// input.sort((a, b) => a - b)
// let answer = [];

// for (let i = 1; i <= 30; i++){ 
//     let num = i;
//     if (input.indexOf(num) === -1 ) {
//         console.log(Number(num))
//     }
// }
