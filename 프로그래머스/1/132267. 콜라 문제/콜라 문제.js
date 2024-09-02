function solution(a, b, n) {
    var answer = 0;
    let coke = n;
    let rest = 0;
    
    while(coke >= a){
        rest = coke % a;
        coke = parseInt(coke / a) * b;
        answer += coke;
        coke += rest;
        rest = 0;
    }
    
    return answer;
}