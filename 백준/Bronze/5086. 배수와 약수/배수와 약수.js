const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "5086/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

input.forEach((el) => {
  const [num1, num2] = el.split(" ").map(Number);
  if (num2 % num1 === 0) {
    console.log("factor");
  } else if (num1 % num2 === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
});
