function solution(a, b) {
    const month = [0, 31, 29, 31,30, 31, 30, 31, 31, 30, 31, 30, 31];
    let date = 0; 
    
    // a-1 번째 달까지 slice해서 누적합 구하고
    if (a !== 1) {
            date = month.slice(1, a).reduce((acc, cur)=>{
               return acc += cur;
           }, 0)
    }

    
    // 거기에 b(일)을 더하고
   const totalDate = date + b
    
    // 나누어서 1이면 MON ... 6이면 SUN
   if (totalDate % 7 === 1) return "FRI"
    else if (totalDate % 7 === 2) return "SAT"
    else if (totalDate % 7 === 3) return "SUN"
    else if (totalDate % 7 === 4) return "MON"
    else if (totalDate % 7 === 5) return "TUE"
    else if (totalDate % 7 === 6) return "WED"
    else  return "THU"
}