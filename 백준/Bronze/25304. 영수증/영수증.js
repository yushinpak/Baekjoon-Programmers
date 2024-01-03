const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


let TotalPrice = Number(input[0])
let GoodsNumber = Number(input[1])

let calculatedTotalPrice = 0

for (let i = 2; i <= (1+GoodsNumber); i++) {
    let num = input[i].split(' ')
    calculatedTotalPrice += Number(num[0]) * Number(num[1])
}

if (TotalPrice === calculatedTotalPrice) {
    console.log('Yes')
} else {
    console.log('No')
}