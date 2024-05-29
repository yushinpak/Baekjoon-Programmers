const N = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "2839/input.txt"
  )
);

const quotient = Math.floor(N / 5);

let answer = -1;

for (let i = quotient; i >= 0; i--) {
  let remainder = N - 5 * i;
  if (remainder % 3 === 0) {
    answer = i + Math.floor(remainder / 3);
    break;
  }
}

console.log(answer);
