function convertion(s){
    let zero = 0;
    let newString = '';
    [...s].map((n) => {
        if (n === '0'){
            zero++;
        } else {
            newString += n;
        }
    })
    
    const length = newString.length;
    newString = length.toString(2);
    
    return [zero, newString];
}

function solution(s) {
    let zero = 0;
    let count = 0;
    let n = 0;
    
    while(s.length !== 1){
        count ++
        [n, s] = convertion(s);
        zero += n;
    }
    
    return [count, zero];
}