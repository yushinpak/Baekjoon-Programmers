const n = BigInt(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "24262/input.txt"
  )
);

console.log((n * n * n).toString());
console.log(3);
