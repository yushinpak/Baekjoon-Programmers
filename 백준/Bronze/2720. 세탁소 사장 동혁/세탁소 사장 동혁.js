const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2720/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)

// 내 풀이 - 단순 계산
// 더 세련된 풀이가 있을 것! 지금은 하드코딩에 가까움

const array = input.slice(1); 
array.forEach((change) => {
  const querterCount = parseInt(change/25);
  const dimeCount = parseInt((change - 25*querterCount) / 10);
  const nickelCount = parseInt((change - 25*querterCount - 10*dimeCount) / 5);
  const pennyCount = parseInt((change - 25*querterCount - 10*dimeCount - 5*nickelCount) / 1);
  console.log(querterCount, dimeCount, nickelCount, pennyCount)
})

// 다른 풀이 - coins에 동전의 값을 넣고 result에 값을 넣음. 
// result는 몫(동전의 개수), input은 나머지(몫을 빼고 남은 동전의 값)
const count = Number(input[0]);
const coin = [25, 10, 5, 1];

let result = [];

for (let i = 1; i <= count; i++) {
  result = [0, 0, 0, 0];

  for (let j = 0; j < coin.length; j++) {
    result[j] = Math.floor(Number(input[i]) / coin[j]);
    input[i] = Number(input[i]) % coin[j];
  }

  console.log(result.join(" "));
}
