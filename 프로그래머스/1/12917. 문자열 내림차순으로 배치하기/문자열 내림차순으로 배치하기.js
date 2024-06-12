function solution(s) {
    const array = s.split("");
    
    // 대문자인지 소문자인지 알아내서 각자 배열에 넣기
    const isUpperCase = (char) => {
        return char === char.toUpperCase() && char !== char.toLowerCase();
    }

    let upperCase = [], lowerCase = [];
    
    array.forEach((el)=> {
        isUpperCase(el) ? upperCase.push(el) : lowerCase.push(el)
    });
    
    // 정렬
    const sortedLowerCase = lowerCase.sort((a, b) => b.localeCompare(a));
    const sortedUpperCase = upperCase.sort((a, b) => b.localeCompare(a));
    
    return lowerCase.join("") + upperCase.join("");
}