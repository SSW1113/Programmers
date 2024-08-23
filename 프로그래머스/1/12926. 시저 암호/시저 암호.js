function solution(s, n) {
    var answer = '';
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            answer += " ";
            continue;
        }
        let ASCI = s[i].charCodeAt();
        for(let j=0; j<n; j++){
            if(ASCI === 90 || ASCI === 122)
                ASCI -= 25;
            else
                ASCI++;
        }
        answer += (String.fromCharCode(ASCI));
    }
    return answer;
}