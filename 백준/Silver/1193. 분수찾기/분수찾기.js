const input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "1193/input.txt"
    )
    .toString()
    .trim()
);

// 행 번호 찾기
let row = 1;
let accumulation = 0;
while (accumulation < input) {
  accumulation += row;

  if (accumulation < input) {
    row++;
  } else {
    break;
  }
}

// 행 번호에서 몇 번 순서인지 구하고, 홀수와 짝수 경우 나눠서 답 내기
const order = input - (row * row - row + 2) / 2; // input값에서 해당 행까지 이전 항들의 합 빼기

if (row % 2 === 0) {
  console.log(`${1 + order}/${row - order}`);
} else {
  console.log(`${row - order}/${1 + order}`);
}