const input = require("fs")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2941/input.txt")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2941/input2.txt")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2941/input3.txt")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2941/input4.txt")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2941/input5.txt")
  .toString()
  .trim();

let answer = input.length;
// console.log("원래 글자 수", answer);

for (let i = 0; i < input.length; i++) {
  if (input[i] === "d") {
    if (input[i + 1] === "z" && input[i + 2] === "=") {
      answer -= 2;
      //   console.log("dz=");
    } else if (input[i + 1] === "-") {
      answer -= 1;
      //   console.log("d-");
    }
  } else if (input[i] === "c") {
    if (input[i + 1] === "=") {
      answer -= 1;
      //   console.log("c=");
    } else if (input[i + 1] === "-") {
      answer -= 1;
      //   console.log("c-");
    }
  } else if (input[i] === "l" && input[i + 1] === "j") {
    answer -= 1;
    // console.log("lj");
  } else if (input[i] === "n" && input[i + 1] === "j") {
    answer -= 1;
    // console.log("nj");
  } else if (input[i] === "s" && input[i + 1] === "=") {
    answer -= 1;
    // console.log("s=");
  } else if (input[i] === "z" && input[i + 1] === "=" && input[i - 1] !== "d") {
    answer -= 1;
    // console.log("z=");
  }
}

console.log(answer);
