const [N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2581/input2.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

  let prime = [];

for (let i = N; i <= M; i++) {
  let arr = [];
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      arr.push(j);
    }
  }
  if (arr.length === 2) prime.push(i)
}

if (prime.length === 0) {
  console.log(-1)
} else {
  let add = 0;
  prime.forEach((num) => {
    add += num
  })
  console.log(add)
  console.log(prime[0]);
}
