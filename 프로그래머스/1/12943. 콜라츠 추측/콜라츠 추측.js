function solution(num) {
    let Num = num;
    let count = 0; 
    
    while(Num > 1 && count < 500) {
        Num = (Num % 2 === 0 ? Math.floor(Num/2) : Num * 3 + 1);
        count++
    }
    
    return Num === 1 ? count : -1
}