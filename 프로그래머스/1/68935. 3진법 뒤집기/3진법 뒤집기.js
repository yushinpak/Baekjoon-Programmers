function solution(n) {
// 1. 3진법으로 변환(뒤집어져서 들어가기 때문에 따로 뒤집을 필요 없음)
    let n_3 = [], share = n, remainder = 0;
    
    while (share >= 3) {
        remainder = share % 3;
        share = Math.floor(share / 3);
        n_3.push(remainder);
    }
    
    n_3.push(share)
    
    // 2. 10진법으로 표현
    return answer = n_3.reduce((acc, cur, idx) => {
        return acc + cur * Math.pow(3, n_3.length - 1 - idx);    
    }, 0)   
}