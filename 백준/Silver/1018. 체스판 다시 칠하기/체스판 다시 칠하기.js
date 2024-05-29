const input = require("fs")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1018/input.txt")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1018/input2.txt")
  .toString()
  .trim()
  .split("\n");

const startFromBlack = "BWBWBWBWWBWBWBWB".repeat(4);
const startFromWhite = "WBWBWBWBBWBWBWBW".repeat(4);

const [N, M] = input.shift().split(" ").map(Number);

let answer = 64;

for (let j = 0; j <= M - 8; j++) {
  // n번째 문자열부터 n번째까지 자를 것(column)

  for (let i = 0; i <= N - 8; i++) {
    // n번째 배열부터 n번째 배열까지 돌 것(row), 배열의 시작 index를 찾는 코드
    let array = "";

    for (let iCount = 0; iCount <= 7; iCount++) {
      // n번째 배열을 찾아서 index에 해당하는 값을 가져와 문자열에 합치는 코드
      array += input[i + iCount].slice(j, j + 8);
    }

    let blackDiffCount = 0,
      whiteDiffCount = 0;

    // 몇 개가 다른지 확인하는 코드 (1)startFromBlack과 얼마나 다른지 체크 (2)startFromWhite와 얼마나 다른지 체크 (3)이때까지 나온 최솟값보다 더 작다면 answer을 교체
    for (let k = 0; k < 64; k++) {
      if (array[k] !== startFromBlack[k]) {
        blackDiffCount++;
      }

      if (array[k] !== startFromWhite[k]) {
        whiteDiffCount++;
      }
    }

    if (blackDiffCount <= whiteDiffCount && blackDiffCount < answer) {
      answer = blackDiffCount;
    } else if (blackDiffCount > whiteDiffCount && whiteDiffCount < answer) {
      answer = whiteDiffCount;
    }
  }
}

console.log(answer);
