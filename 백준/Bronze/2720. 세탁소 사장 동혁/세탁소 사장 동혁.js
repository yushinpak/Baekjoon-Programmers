const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2720/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)

const array = input.slice(1); 
array.forEach((change) => {
  const querterCount = parseInt(change/25);
  const dimeCount = parseInt((change - 25*querterCount) / 10);
  const nickelCount = parseInt((change - 25*querterCount - 10*dimeCount) / 5);
  const pennyCount = parseInt((change - 25*querterCount - 10*dimeCount - 5*nickelCount) / 1);
  console.log(querterCount, dimeCount, nickelCount, pennyCount)
})