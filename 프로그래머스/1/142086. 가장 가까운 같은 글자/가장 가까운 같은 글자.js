function solution(s) {
    var answer = [];
    const view = new Map;
    
    for(let i=0; i<s.length; i++){
        if(view.get(s[i]) === undefined)
            answer.push(-1);
        else
            answer.push(i - view.get(s[i]));
        view.set(s[i], i);
    }
    return answer;
}