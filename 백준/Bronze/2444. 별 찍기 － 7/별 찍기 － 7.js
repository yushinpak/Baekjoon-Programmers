const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "2444/input.txt"
    )
    .toString()
    .trim(); // 줄 바꿈 문자를 제거하여 문자열을 제대로 파싱합니다.

const num = Number(input);

let arr = [];

for (let i = 0; i < 2 * num - 1; i++) {
    let stars = '';

    // 삼각형 위쪽 부분
    if (i < num) {
        stars = '*'.repeat(2 * i + 1);
        arr.push(' '.repeat(num - i - 1) + stars);
    }
    // 삼각형 아래쪽 부분
    else {
        stars = '*'.repeat(2 * (2 * num - 2 - i) + 1);
        arr.push(' '.repeat(i - num + 1) + stars);
    }
}

console.log(arr.join('\n'));
