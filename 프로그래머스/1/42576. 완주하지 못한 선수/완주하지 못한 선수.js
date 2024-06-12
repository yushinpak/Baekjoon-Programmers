function solution(participant, completion) {
// 배열 비교

// 1. 동명이인 있는지 여부 파악 -> set으로 확인
const uniqueParticipant = [...new Set(participant)]
let answer = "";
if (participant.length === uniqueParticipant.length) {
    // 2. 동명이인 없으면 includes()로 완주여부 확인
        participant.forEach((runner) =>{
            if (!completion.includes(runner)) {
                answer = runner;
            }
        });
    return answer
    } else {
    // 3. 동명이인 있으면 배열에서 겹치는 거 지우기 or sort, index로 확인해서 달라지는 시점 확인
    const sortedParticipant = participant.sort();
    const sortedCompletion = completion.sort();
        console.log(sortedParticipant, sortedCompletion)
    
    for (let i = 0; i < sortedParticipant.length; i++) {
        if (sortedParticipant[i] !== sortedCompletion[i]){
            answer = sortedParticipant[i]
            break;
        }
        
        if (sortedCompletion[i] === undefined) {
            answer = sortedParticipant[i]
        }
    }
        return answer
    }
}
