const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//input에 각 줄이 배열 자료형으로 담기므로 각 줄에 접근하려면 인덱싱으로 접근

const num = input[0];

for (let i = 1; i <= num; i++){
    let a = input[i].split(' ');
    console.log(Number(a[0])+Number(a[1]));
}