function solution(numbers) {
    let answer = 0;
    
    for(let i = 0; i <= 9; i++){
     if (numbers.indexOf(i) === -1) answer += i   
    }
    
    return answer
}