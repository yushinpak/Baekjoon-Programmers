const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
//input에 각 줄이 배열 자료형으로 담기므로 각 줄에 접근하려면 인덱싱으로 접근

let time = input[0].split(' ');
let hour = Number(time[0]);

let total_minute = Number(time[1]) + Number(input[1]);

if (total_minute > 59) {
    hour += parseInt(total_minute/60)
    total_minute = total_minute%60
}

if (hour >= 24) {
    hour -= 24
}

console.log(`${hour} ${total_minute}`)