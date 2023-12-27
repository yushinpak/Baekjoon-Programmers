const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){

const N = input[0]

for (var i = 1; i<=9; i++) {
    console.log( N+' * '+i+' = '+(N*i) )
}
    
    process.exit();
});