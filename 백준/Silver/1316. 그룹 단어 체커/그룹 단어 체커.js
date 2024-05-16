const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1316/input1.txt")
  .toString()
  .trim()
  .split("\n");

const array = input.slice(1); // 단어만 배열로 만든 것
let answer = 0;

array.forEach((word) => {
  const wordArray = word.split(""); // 단어를 알파벳 하나씩 자른 배열
  const set = new Set(wordArray),
    pureArray = [...set]; // 중복값을 제거한 배열

  // 중복값을 세는 객체
  const result = {};
  wordArray.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });

  let isUnique = 0;

  for (let i = 0; i < pureArray.length; i++) {
    const firstChar = wordArray.indexOf(pureArray[i]);
    const lastChar = wordArray.lastIndexOf(pureArray[i]);
    const charNum = result[pureArray[i]];

    // 중복값이 없으면 통과 or 마지막 인덱스 위치 - 첫 인덱스 +1 = 0이면 통과
    if (
      wordArray.length === pureArray.length ||
      lastChar - firstChar + 1 === charNum
    ) {
      isUnique += 1;
    } else {
      break;
    }
  }

  if (isUnique === pureArray.length) {
    answer += 1;
  }
});

console.log(answer);
