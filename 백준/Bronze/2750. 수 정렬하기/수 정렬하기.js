const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2750/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1)

console.log(input.sort((a, b) => a - b).join("\n"))