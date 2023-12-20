const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	
    let A = parseInt(input[0])
    let B = parseInt(input[1])
    
    console.log(A+B)
    console.log(A-B)
    console.log(A*B)
    console.log(parseInt(A/B))
    console.log(A%B)
    
    process.exit();
});