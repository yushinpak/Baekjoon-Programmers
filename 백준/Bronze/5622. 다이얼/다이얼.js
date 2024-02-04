const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "5622/input.txt"
    )
    .toString()
    .trim()
    .split("");

let arr = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ"
}

let answerNum = 0;

input.forEach((el) => {
    for (let i = 2; i <= 9; i++) {
        if (arr[i].includes(el)) {
            answerNum += i + 1;
        }
    }
})

console.log(answerNum)