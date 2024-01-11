function solution(a, b, c) {
    
let abc = a + b + c
let aabbcc = (Math.pow(a, 2)+ Math.pow(b, 2) + Math.pow(c, 2))
let aaabbbccc = (Math.pow(c, 3)+ Math.pow(a, 3)+ Math.pow(b, 3))
    
    if ( a !== b && b !== c && c !==a ) return abc;
    else if ( a == b && b == c && c == a ) return abc*aabbcc*aaabbbccc;
    else if ( a == b || b == c || c == a )  return abc*aabbcc;
}