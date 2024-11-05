function solution(s) {
    let answer = [];
    const string = s.split(' ');
    
    string.map((word) =>{
        if(word === ''){
            answer.push(word);
        } else {
            console.log(word);
            word = word[0].toUpperCase() + word.slice(1).toLowerCase();
            answer.push(word);
        }
        
    })
    
    return answer.join(' ');
}