function solution(name, yearning, photo) {
    const yearningMap = new Map;
    
    for(let i = 0; i < name.length; i++) {
        yearningMap.set(name[i], yearning[i])
    }
    
    let answer = [];
        
    photo.forEach((group) => {
        answer.push(group.reduce((acc, cur) => {
           return yearningMap.get(cur) !== undefined ? acc + yearningMap.get(cur) : acc
        }, 0))
    })
    
    return answer
}