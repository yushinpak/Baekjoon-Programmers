//나는 홀수일 때 1+2*0, 1+2*1, ...으로 가고 i가 n/2까지 가는 해괴한 식을 세웠음
//그러나 그럴 필요가 없다
//for문 안에 if문을 하나 더 추가하면 훨씬 간단하게 해결할 수 있음

function solution(n) {
    var answer = 0;

    if(n%2==0){
        for(let i=1; i<=n; i++){
            if(i%2==0){
                answer += i*i;
            }
        }
    }
    else{
        for(let i=1; i<=n; i++){
            if(i%2==1){
                answer += i;
            }
        }
    }

    return answer;
}
