const input = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "24262/input.txt"
  )
);

let answer = 0;

for (let i = 0; i < input; i++) {
  answer += i;
}

console.log(answer);
console.log(2);
