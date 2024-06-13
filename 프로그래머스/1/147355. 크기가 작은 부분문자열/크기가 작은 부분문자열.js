function isSmallerThanP (string, p) {
    return string <= Number(p) ? true : false;    
}

let count = 0;

function solution(t, p) {
 for (let i = 0; i < t.length + 1 - p.length; i++) {
     const string = parseInt(t.substr(i, p.length));
     
     if (isSmallerThanP(string, p)) count++
 }
    return count
}