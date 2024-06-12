function solution(n, m) {
    let answer = [];
    
    // 최대공약수
    for (let i = Math.min(n, m); i >= 1; i--) {
        if (n % i === 0 && m % i === 0) {
            answer.push(i)
            break;
        }
    }
    
    // 최소공배수
    for (let i = Math.max(n, m); i <= n*m; i++) {
        if ( i % n === 0 && i % m === 0) {
            answer.push(i)
            break;
        }
    }
    
    return answer
}