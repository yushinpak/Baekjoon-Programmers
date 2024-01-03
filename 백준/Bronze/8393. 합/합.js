var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = Number(input);

var answer = 0

for (let i = 1; i <= n; i++) {
    answer += i
}

console.log(answer)