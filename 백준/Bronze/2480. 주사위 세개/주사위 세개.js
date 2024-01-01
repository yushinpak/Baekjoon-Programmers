const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	
const a = input[0]
const b = input[1]
const c = input[2]

var result = 0;

if(a == b && b == c && c == a) {
    result = 10000 + a * 1000;
} else if (a == b) {
    result = 1000 + a * 100;
} else if (b == c) {
    result = 1000 + b * 100;
} else if (c == a) {
    result = 1000 + c * 100;
} else if (a > b && a > c){
    result = a*100;
} else if (b > a && b > c) {
    result = b*100;
} else if (c > a && c > b) {
    result = c*100;
    }

console.log(result)

    process.exit();
});