function solution(a, b, n) {
    let share = n;
    let remainder = 0;
    let count = 0;
    
    while(share >= a || share === n) {
        remainder = (share % a) // 나머지 병
        share = Math.floor(share / a) * b // 몫 * 병 몇 개 주는지
        count += share;

        if (share + remainder >= a) {
            share += remainder
        }
    }
    return count
}