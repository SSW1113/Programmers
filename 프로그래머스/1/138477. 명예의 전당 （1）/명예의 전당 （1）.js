function solution(k, score) {
    var answer = [];
    var rank = [];
    
    for(let i = 0; i<score.length; i++){
        rank.push(score[i]);
        rank.sort((a,b) => b - a);
        if(i < k - 1){
            answer.push(rank[i]);
            continue;
        }
        answer.push(rank[k-1]);
    }
    
    return answer;
}