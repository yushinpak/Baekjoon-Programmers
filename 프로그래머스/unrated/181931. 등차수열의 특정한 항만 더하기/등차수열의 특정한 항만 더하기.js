//등차수열의 식 a + (n-1)d

function solution(a, d, included) {
    var answer = 0;
    
    for (let i = 0; i < included.length; i++) {
        if (included[i] === true) answer += a + (i)*d
    }
    

    
    return answer;
}