const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	
    let A = input[0]
    let B = input[1]
    let C = input[2]
        
console.log(A+B+C)

    
    process.exit();
});