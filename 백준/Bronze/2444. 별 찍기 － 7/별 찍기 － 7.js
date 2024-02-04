const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "2444/input.txt"
    )
    .toString()

const num = Number(input);
let arr = [];

//삼각형 위쪽
for (i = 0; i < num; i++) {
    arr.push(' '.repeat(num - (i + 1)) + '*'.repeat(2 * i + 1))
}

//삼각형 아래쪽
for (j = num-2; j >= 0; j--) {
    arr.push(arr[j]);
}

console.log(arr.join('\n'));
