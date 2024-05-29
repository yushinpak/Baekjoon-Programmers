const N = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "1436/input.txt"
  )
);


// count 개수가 N보다 작은 동안 while문을 통해 수를 증가시킴
// while문 안에서 연속된 666이 존재하면 count++
let count = 0;
let number = 665;

while (count < N) {
  number++
  if (number.toString().includes("666")) {
    count++
  }
}

console.log(number)

