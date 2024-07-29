// 진수 변환기
const tenToTwo = (number, n) => {
    let answer = '';
    let share = number;
    
    while ( answer.length < n) {
        answer = share % 2  + answer;
        share = Math.floor(share/2);
    }
    
    return answer;
    
}

function solution(n, arr1, arr2) {
    let result = [];
    
    for(let i = 0; i < arr1.length; i++) {
        const temp1 = tenToTwo(arr1[i], n);
        const temp2 = tenToTwo(arr2[i], n);
        
        let string = '';
        for(let j = 0; j < n; j++) {
            
            if(temp1[j] === '0' && temp2[j] === '0') {
                string += ' '
            } else {
                string += '#'
            }       
        }
        result.push(string)
    }
return result
}