function solution(s) {
    let object = {}, answer = [];
    
    s.split("").forEach((el, index)=> {
        object[el] !== undefined ? answer.push(index - object[el]) : answer.push(-1);
        object[el] = index;
    })
    
return answer
}