const [A, B] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2164/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 최대공약수
let GCF = 1;
for (let i = 2; i <= Math.min(A, B); i++) {
  if (A % i === 0 && B % i === 0) GCF = i;
}
console.log(GCF);

// 최소 공배수
for (let i = Math.max(A, B); i <= A*B; i++) {
  if (i % A === 0 && i % B === 0) return console.log(i);
}
