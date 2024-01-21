
const fs = require('fs'); 
const path = '15552/input_boj.txt'

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on('line', function (line) {
	input.push(line)
}).on('close', function () {
  
	// 코드 시작
    var answer = [];
    
    for (let i = 1; i <= input[0]; i++) {
        let arr = input[i].split(' ').map(Number);
        answer.push (arr[0]+arr[1]);
    }

    console.log(answer.join('\n'));
	// 코드 끝
  
	process.exit()
})