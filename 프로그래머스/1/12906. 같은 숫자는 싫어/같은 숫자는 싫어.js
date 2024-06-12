function solution(arr)
{
    let answer = [];
    let previousNumber = -1;
    for(let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        
        if (previousNumber !== currentValue) {
            previousNumber = currentValue;
            answer.push(currentValue);
        }
    }
    return answer
}