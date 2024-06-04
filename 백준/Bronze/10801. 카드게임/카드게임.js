const [Card_A, Card_B] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "10797/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let A = 0,
  B = 0;

for (let i = 0; i < Card_A.length; i++) {
  if (Card_A[i] > Card_B[i]) {
    A++;
  } else if (Card_A[i] < Card_B[i]) {
    B++;
  }
}

if (A > B) {
  console.log("A");
} else if (A < B) {
  console.log("B");
} else {
  console.log("D");
}
