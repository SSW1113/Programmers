function solution(s) {
    let answer;
    const string = s.split(' ').map((n) => n = +n);
    let max = string[0];
    let min = string[0];
    
    string.map((n) => {
        if(n >= max){
            max = n;
        } else if(n <= min){
            min = n;
        }
    })
    
    answer = `${min} ${max}`;
    return answer;
}