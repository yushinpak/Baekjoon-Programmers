function solution(k, score) {
    let honorArray = [], answer = [];

    for (let i = 0; i < score.length; i++) {
        honorArray.push(score[i]);
        honorArray.sort((a, b) => b - a);
        if (i >= k) {
            honorArray.pop();
        }
        answer.push(honorArray[honorArray.length - 1])
    }
    return answer;
}