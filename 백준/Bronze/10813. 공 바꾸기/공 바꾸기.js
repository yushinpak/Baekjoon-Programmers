const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 문제해석
// 바구니: 1 2 3 ... N
// 처음에는 바구니에 적혀있는 번호와 같은 공 하나씩 들어있음

// M: 공을 바꿀 횟수 앞으로 M번 공을 바꿀것
// 공을 바꿀 바구니 두 개를 선택하고, 두 바구니에 들어있는 공을 교환

//바구니 N개와 공 바꿀 횟수 M번
let NM = input[0].split(' ').map(Number)
const N = NM[0],
    M = NM[1];

let answer = [];

//바구니에 각 공 넣음
for(let i = 0; i < N; i++) { 
    answer.push(i+1)
}

//공을 바꾸기
for (let j = 1; j <= M; j++) {
    let arr = input[j].split(' ').map(Number)
    let k = arr[0];//k번째 바구니
    let q = arr[1];//q번째 바구니

    const k_value = answer[k-1];//k번째 바구니의 지금 담겨있는 값
    
    answer[k-1] = answer[q-1];
    answer[q-1] = k_value;
}

console.log(answer.join(' '))