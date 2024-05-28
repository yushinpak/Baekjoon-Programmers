const N = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "2231/input.txt"
  )
);

let answer = 0;
for (let i = 1; i < N; i++) {
  const potentialConstructor = i; // 생성자
  const digitSum = potentialConstructor // 각 자릿수의 합
  .toString()
  .split("")
  .reduce((sum, digit) => sum + Number(digit), 0);

  if (potentialConstructor + digitSum === N) {
    answer = potentialConstructor
    break;
  }
}

console.log(answer);
