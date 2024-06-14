function solution(x) {
    const add = x.toString().split("").reduce((acc, cur) => acc + parseInt(cur), 0);
    return (x % add === 0 ? true : false )
}