const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2501/input3.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

  let factorArr = [];
  for (let i = 0; i <= input[0]; i++) {
    if (input[0] % i === 0) {
      factorArr.push(i);
    }
  }

  console.log(factorArr[input[1]-1] === undefined ? '0' : factorArr[input[1]-1]);