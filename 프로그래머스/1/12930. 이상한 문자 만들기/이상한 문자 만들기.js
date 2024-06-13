// 문자를 인덱스에 따라 대소문자로 변환해주는 함수
function convertor (word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        result += (i % 2 === 1 ? word[i].toLowerCase() : word[i].toUpperCase());
    }
    return result
}


function solution(s) {
    // 단어를 공백 기준으로 분리
    let words = s.split(" ");
    
    // 새로운 배열에 convertor 함수 씌워서 단어 추가
    let newWords = [];
    words.forEach((word) => {
        newWords.push(convertor(word));
    })
    
    return newWords.join(" ")
}