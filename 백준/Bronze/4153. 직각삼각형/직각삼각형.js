const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "4153/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number))
  .slice(0, -1);

input.forEach((el) => {
  el.sort((a, b) => a - b);
  console.log(
    Math.pow(el[0], 2) + Math.pow(el[1], 2) === Math.pow(el[2], 2)
      ? "right"
      : "wrong"
  );
});
