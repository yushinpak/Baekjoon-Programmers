const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(' ').map(Number);
        console.log(arr[0]+arr[1])
}
        