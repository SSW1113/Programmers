function solution(keymap, targets) {
    let answer = [];
    let timeForKey = new Map();
    
    for(let key of keymap){
        for(let i = 0; i<key.length; i++){
            if(!timeForKey.has(key[i]) || i + 1 < timeForKey.get(key[i])){
                timeForKey.set(key[i], i + 1);
            }
        }
    }
    
    for(let string of targets){
        let count = 0;
        for(let i = 0; i<string.length; i++){
            count += timeForKey.get(string[i]);
        }
        if(count){
            answer.push(count);
        } else {
            answer.push(-1);
        }
    }
    
    return answer;
}