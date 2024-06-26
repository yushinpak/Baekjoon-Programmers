function solution(answers) {
    let arr = [0, 0, 0]
    let answer1 = '12345'.split("").map((el) => Number(el)), answer2 = '21232425'.split("").map((el) => Number(el)), answer3 = '3311224455'.split("").map((el) => Number(el));
    
    answers.forEach((el, idx) => {
        if (el === answer1[idx%5]) arr[0]++
        if (el === answer2[idx%8]) arr[1]++
        if (el === answer3[idx%10]) arr[2]++
    })
    
    let result = [];
    let max = 0;
    
    arr.forEach((el, idx) => {
            if (el === max) {
                result.push(idx + 1)
            } else if (el > max) {
                result = [];
                max = el;
                result.push(idx + 1)
            }
        })
    
    return result
}