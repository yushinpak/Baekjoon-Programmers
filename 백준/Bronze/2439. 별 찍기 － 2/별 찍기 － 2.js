var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = input; 
n = Number(n)


for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n-i) + '*'.repeat(i))
}