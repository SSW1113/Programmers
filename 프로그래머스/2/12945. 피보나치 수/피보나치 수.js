function solution(n) {
    let answer;
    if(n <= 1){
        answer = n;
    } else {
        let n1 = 0;
        let n2 = 1;
        
        for (let i = 2; i <= n; i++){
            answer = (n1 + n2) % 1234567;
            n1 = n2;
            n2 = answer;
        }
    }
    
    return answer
}