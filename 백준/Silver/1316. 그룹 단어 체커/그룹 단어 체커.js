const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1316/input1.txt")
  .toString()
  .trim()
  .split("\n");


// 내 풀이 - 중복값이 없는 배열을 만들고 수를 세어 중복값이 없으면 통과 || 마지막 인덱스 위치 - 첫 인덱스 + 1 = 등장한 해당 알파벳의 개수면 통과
// 새로 배운 것 - set 객체로 중복값을 제거한 배열 만들 수 있음, forEach로 중복값을 세는 객체 쉽게 만들 수 있다

// 다른 풀이 - '이전에 등장한 알파벳'을 쉽게 알아보는 방법은 indexOf -> 이런 방식이 일반적인 풀이임. 내가 indexOf를 떠올리지 못해서 조금 돌아간 것 같다!

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

    // 중복값이 없으면 통과 or 마지막 인덱스 위치 - 첫 인덱스 +1 = 알파벳의 개수이면 통과
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
