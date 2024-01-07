let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split('\n');
//input은 배열 자료형으로 담기므로 각 글자에 접근하려면 인덱싱으로 접근

let number = Number(input[0]);
let arr = [];

for (let i = 1; i <= number; i++) {
   arr.push(input[i].split(' ').map(Number));
}

for ( let n = 0; n < number; n++) {
    console.log(`Case #${n+1}: ${arr[n][0]+arr[n][1]}`);
}
