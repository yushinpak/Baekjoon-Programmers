let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

input.sort((a, b) => a - b)

for (let i = 1; i <= 30; i++){ 
    let num = i;
    if (!input.includes(num)) {
        console.log(num)
    }
}
