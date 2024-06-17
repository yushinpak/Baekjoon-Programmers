function solution(a, b) {
    let result = 0;
    
    const [A, B] = a > b ? [b, a] : [a, b];
    
    for(let i = A; i <= B; i++) {
            result += i
    }
    return result
}