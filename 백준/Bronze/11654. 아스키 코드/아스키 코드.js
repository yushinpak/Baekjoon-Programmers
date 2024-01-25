const { toASCII } = require('punycode');

const input = require('fs')
    .readFileSync(
        process.platform === "linux"
            ? "/dev/stdin"
            : "11654/input_1.txt"
    )
    .toString()
    .trim()


//숫자일 때, 문자열 타입을 숫자로 바꿔줌
if (typeof(input) === Number) {
    input = Number(input);
}

//문자 -> 아스키코드 String.charCodeAt();
//아스키코드 -> 문자 String.fromCharCode();
//특이점은 charCodeAt()의 맨처음은 소문자이고 fromCharCode의 Char은 대문자임
//카멜표기법!

console.log(input.charCodeAt());