function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
        let newArr = array.slice(commands[i][0] - 1, commands[i][1]);
        let index = newArr.sort((a,b) => a - b)[commands[i][2]-1];
        answer.push(index);
    }
    
    return answer;
}