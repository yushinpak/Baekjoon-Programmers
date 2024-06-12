function solution(s) {
    if (s.length === 4 || s.length ==6)  return s.split("").map(Number).join("") === s ? true : false;
    else return false
}