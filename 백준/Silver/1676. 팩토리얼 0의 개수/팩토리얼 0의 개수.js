const N = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "1676/input.txt"
  )
);

let result = BigInt(1);
for (let i = 2; i <= N; i++) {
  result = result * BigInt(i);
}

const numArray = result.toString().split("").reverse().map(Number);

let index = 0,
  answer = 0;

while (index < numArray.length) {
  if (numArray[index] === 0) {
    answer++;
    index++;
  } else {
    break;
  }
}

console.log(answer);
