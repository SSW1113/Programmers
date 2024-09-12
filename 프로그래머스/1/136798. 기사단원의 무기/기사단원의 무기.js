function divisor (num){
    let answer = 0;
    for (let i=1; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            answer ++;
            if (num / i !== i)
                answer ++;
        }
    }
    return answer;
}


function solution (number, limit, power) {
    let answer = 0;
    for (let i=1; i<= number; i++){
        let atk = divisor(i);
        if(atk > limit){
            atk = power;
        }
        answer += atk;
    }
    return answer;
}