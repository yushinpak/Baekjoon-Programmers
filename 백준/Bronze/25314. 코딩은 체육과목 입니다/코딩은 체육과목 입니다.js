var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = input; 

if (input%4 === 0){
    console.log('long '.repeat(input/4 ) + 'int')

} else {
    console.log('long '.repeat(input/4 + 1) + 'int')
}