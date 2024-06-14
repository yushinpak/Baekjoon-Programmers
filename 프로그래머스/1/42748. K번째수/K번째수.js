function solution(array, commands) {
    // 자르고 정렬해서 k번째 숫자를 응답으로 돌려보냄
    // i, j, k를 원소로 가진 2차원 배열이 매개변수로 주어질 때 모든 원소에 대한 연산을 적용한 배열
    // commands 안의 모든 요소에 대해 실행해야함 -> forEach 혹은 map을 사용 / 그러나 바로 반환해야하니까 map
    let answer = commands.map(([i, j, k]) => {
        // 자르기 & 정렬하기
        const tempArray = array.slice(i - 1, j).sort((a, b) => a - b);
        // 반환하기
        return tempArray[k - 1]
    })
    return answer
}

