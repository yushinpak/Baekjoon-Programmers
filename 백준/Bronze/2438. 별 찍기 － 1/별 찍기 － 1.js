const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	const number = input[0]
    var result = ''
    
    for (var i = 1; i <= number; i++) {
        console.log(result += '*')
    }
    
    process.exit();
});