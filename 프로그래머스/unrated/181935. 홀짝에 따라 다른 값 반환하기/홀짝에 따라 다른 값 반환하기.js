function solution(n) {
    var answer = 0;
    
    if (n % 2 === 1){
        for (let i = 0; i < n/2; i++){
            answer += 1+2*i//홀수인 모든 양의 정수의 합
        } 
    } 
    
    else {
        for (let i = 1; i <= n/2; i++){
            answer += (2*i)*(2*i)//짝수인 모든 양의 정수의 제곱의 합
        }
    }
    
    return answer;
}