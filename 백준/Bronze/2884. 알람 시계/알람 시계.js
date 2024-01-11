//여러번 틀린 이유: 비교연산자 ==를 =로 잘못 씀!

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let hour = Number(input[0]), minute = Number(input[1]);


if (minute >= 45) {
    minute -= 45
}
else if (0 <= minute && minute < 45) {
    hour = hour - 1;
    minute += 15;
}
    
if (hour == -1) {//자정 넘으면 23시로 바꿔주기
    hour = 23
     }

console.log(hour, minute)