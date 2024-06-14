function solution(X, Y) {
    // 1. 중복된 숫자를 찾기
    const X_Array = X.split("");
    const y = new Map();

    Y.split("").forEach((el) => {
        y.get(el) !== undefined ? y.set(el, y.get(el) + 1) : y.set(el, 1);
    })

    let answerArray = [];

    for (let i = 0; i < X.length; i++) {
        if (y.get(X_Array[i]) > 0) {
            answerArray.push(X_Array[i]);
            y.set(X_Array[i], y.get(X_Array[i]) - 1)
        }
    }

    // 2. 가장 크게 조합하여 반환하기
    // 모든 부분이 0인지 조사
    answerArray.sort((a, b) => b - a);

    if (answerArray.length === 0) {
        return "-1"
    } else if (answerArray[0] === '0' && answerArray[answerArray.length - 1] === '0') {
        return "0"
    } else {
        return (answerArray.length === 0 ? "-1" : answerArray.join(""))
    }
}