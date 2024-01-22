const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N_M = input[0].split(' ').map(Number)
const N = N_M[0], M = N_M[1]


// 문제해석
// 바구니 1 2 3 4  . . . N까지 있는 상태
// N = 바구니 N개 / M = 공을 넣는 횟수
// 두번째줄 i = 공 넣을 바구니 번호 시작 / j = 공 넣을 바구니 번호 마지막 / k = k번이 적힌 공을 넣을 것
let answer = [];

for (let i = 1; i <= N; i++){ //바구니 자체를 만들어버림!
    answer.push(0)
}

for (let num = 1; num <= M; num++) {
    let arr = input[num].split(' ').map(Number);
    let i = arr[0], j = arr[1], k = arr[2];
    
    for (let basketNum = i-1; basketNum <= j-1; basketNum++) {
        answer[basketNum] = k
    }
}

console.log(answer.join(' '))