function solution(X, Y) {
    var answer = '';
    X = X.split('');
    Y = Y.split('');
    
    for(let i=9; i>=0; i--){
        const xHas = X.filter(a => Number(a) === i).length;
        const yHas = Y.filter(a => Number(a) === i).length;
        answer += String(i).repeat(Math.min(xHas, yHas));
    }
    
    if(answer === '')
        return '-1';
    if(answer[0] === '0')
        return '0';
    
    return answer;
}