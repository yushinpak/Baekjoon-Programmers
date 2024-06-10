const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "10814/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" "));

input.sort((a, b) => Number(a[0]) - Number(b[0]));
input.forEach((el) => {
  console.log(el.join(" "));
});