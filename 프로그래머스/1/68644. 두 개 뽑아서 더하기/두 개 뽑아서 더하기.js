function solution(numbers) {
    let numbersArray = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j< numbers.length; j++) {
             numbersArray.push(numbers[i] + numbers[j])
        }
    }
    return [...new Set(numbersArray)].sort((a, b) => a - b)
}