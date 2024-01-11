function solution(ineq, eq, n, m) {
    var answer = 0;
    
    
if ( ineq === ">") {
  if (eq === "=" && n >= m ) answer = 1;
  if (eq === "!" && n > m ) answer = 1;
} else {
  if (eq === "=" && n <= m) answer = 1;
  if (eq === "!" && n < m ) answer = 1;
}
    return answer;
}