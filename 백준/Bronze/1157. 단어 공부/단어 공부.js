// unsolved 이유 - 내 풀이과정이 불필요하게 길고 과도하게 돌아가는 느낌쓰.. 실력이 발전된 이후에 다시 도전 ㄱㄱ

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1157/input1.txt")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1157/input2.txt")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1157/input3.txt")
  // .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1157/input4.txt")
  .toString()
  .trim();

const array = input.split("").map((v) => v.toUpperCase());

const count = {};
array.forEach((el) => {
  count[el] = (count[el] || 0) + 1;
});

// 개수 비교 - 가장 많이 나온 알파벳, 개수, 중복여부
let maxAlphabet = ["", 0, "noneDupicate"];
for (const element in count) {
  if (count[element] > maxAlphabet[1]) {
    [maxAlphabet[0], maxAlphabet[1], maxAlphabet[2]] = [
      element,
      count[element],
      "noneDuplicate",
    ];
  } else if (count[element] === maxAlphabet[1] && element !== maxAlphabet[0]) {
    maxAlphabet[2] = "duplicate";
  }
}

maxAlphabet[2] === "duplicate" ? console.log("?") : console.log(maxAlphabet[0]);
