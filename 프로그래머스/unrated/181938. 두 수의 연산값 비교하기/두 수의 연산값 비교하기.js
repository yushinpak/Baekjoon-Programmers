function solution(a, b) {
    var answer = 0;
    
    let A = a.toString() + b.toString();
    let B = 2*a*b;
    
    if (A>B) {
        answer = Number(A);
    } else {
        answer = Number(B);
    }
    
    return answer;
}