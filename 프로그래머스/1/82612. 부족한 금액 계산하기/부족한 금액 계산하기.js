function solution(price, money, count) {
    let accMoney = 0;
    for(let i = 1; i <= count; i++) {
       accMoney += price*i;
    }
    
    return (accMoney - money > 0 ? accMoney - money : 0)
    
}