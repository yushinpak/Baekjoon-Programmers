function solution(keymap, targets) {
    let key = {};

    keymap.forEach((el) => {
        el.split("").forEach((char, index) => {
            if (key[char] === undefined || key[char] > index) return key[char] = index + 1
        })
    })

    let answer = [];
    targets.forEach((target) => {
        let result = 0;

        for (let i = 0; i < target.length; i++) {
            if (key[target[i]] !== undefined) {
                result += key[target[i]];
            } else {
                result = -1;
                break;
            }
        }
        answer.push(result)
    })
return (answer)
}