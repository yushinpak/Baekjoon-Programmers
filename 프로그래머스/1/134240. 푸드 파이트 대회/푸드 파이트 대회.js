function solution(food) {

    // 한쪽 문자열만 만들고
    let answer = '';
    
    for (let i = 1; i < food.length; i++) {
        answer += i.toString().repeat(Math.floor(food[i]/2));
    }
    
    // 그것에 0과 reverse를 붙여 리턴
    return answer + '0' + answer.split("").reverse().join("");
}