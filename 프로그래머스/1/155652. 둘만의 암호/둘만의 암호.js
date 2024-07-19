function solution(s, skip, index) {
    // 알파벳에서 skip에 포함된 글자 제거
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    
    skip.split("").map((skip_el)=>{
        alphabet = alphabet.split(skip_el).join('');
    })
    
    // s 알파벳 index만큼 바꿔서 리턴하기
    let arr = [];
    s.split("").map((el) => {
        arr.push(alphabet[alphabet.indexOf(el) + index])
    })
    return arr.join("");
}