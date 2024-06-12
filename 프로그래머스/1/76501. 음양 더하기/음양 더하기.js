function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((number, index) => {
        signs[index] === true ? answer += number : answer -= number
    })
    
    return answer;
}