function solution(s) {
    let answer = [];
    let x = 0;
    let xCount = 1;
    let yCount = 0;
    
    for(let i=1; i<s.length; i++){
        if(s[i] === s[x]){
            xCount ++;
        } else {
            yCount ++;
        }
        
        if(xCount === yCount){
            answer.push(s.substring(x,i+1));
            x = i+1;
        }
        // } else if(i === s.length - 1){
        //     answer.push(s.substring(x,i+1));
        // }
    }
    if(answer.join('').length !== s.length){
        answer.push(s.substring(x));
    }
    
    return answer.length;
}