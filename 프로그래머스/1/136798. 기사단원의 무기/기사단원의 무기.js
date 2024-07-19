function solution(number, limit, power) {
    // number: 기사 몇 명인지 & 기사 번호
    // limit: 공격력의 제한 수치
    // power: 제한수치 초과하면 구매할 공격력

    // 기사 번호의 약수 '개수'에 해당하는 공격력을 가진 무기를 구매하려 함
    // 기사가 구매할 수 있는 공격력이 제한 수치보다 높을 경우 미리 정한 공격력으로 구매
    // 무기를 모두 만들기 위해 필요한 철의 무게를 계산

    // 1. number 배열의 요소들에 대해 각 기사 번호의 약수 개수(=공격력)를 센다
    // 2. 각 공격력이 제한 수치보다 높은지 판별한다
    // 3. 제한 수치를 초과하면 해당 기사의 공격력의 power로 대체한다

    let array_total = []; // 약수의 개수 array
    for(let i = 1; i <= number; i++) {
        let array = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0 ) array.push(j)
        }
        
        if (array.length > limit) array_total.push(power);
        else array_total.push(array.length);
    }
    
    return array_total.reduce((add, cur) => {
        return add += cur
    }, 0)
}