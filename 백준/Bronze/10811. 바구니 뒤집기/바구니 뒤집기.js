const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "10811/input.txt"
    )
    .toString()
    .trim()
    .split("\n");

//바구니 만들기
const arr = input[0].split(' ');
const N = arr[0];
const M = arr[1];

let basket = [];
for (let i = 1; i <= N; i++) {
    basket.push(i);
}

//인풋의 두 번째 줄부터 범위로 섞기!
input.shift(); // 인풋의 첫번째 값 제거

input.forEach((el) => {
    let i = el.split(' ')[0]
    let j = el.split(' ')[1]

    i = Number(i);
    j = Number(j);

    let reverseArr = [];

    for (let a = i - 1; a <= j - 1; a++) {
        reverseArr.push(basket[a])
    }
    reverseArr = reverseArr.reverse();

    let num = 0;
    for (let b = i - 1; b <= j - 1; b++) {
        basket[b] = reverseArr[num++];
    }
})

console.log(basket.join(' '))