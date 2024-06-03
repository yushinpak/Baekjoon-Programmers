const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2751/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

console.log(input.sort((a, b) => a - b).join("\n")); 