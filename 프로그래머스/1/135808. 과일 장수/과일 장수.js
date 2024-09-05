function solution(k, m, score) {
    var answer = 0;
    let len = parseInt(score.length / m);
    score.sort();
    
    for(let i=0; i<len; i++){
        let tempBox = [];
        for(let j=0; j<m; j++){
            tempBox.push(score.pop());
        }
        tempBox.sort();
        answer += tempBox[0] * m;
    }
    
    return answer;
}