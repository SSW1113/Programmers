function solution(ingredient) {
    let answer = 0;
    let hamburger = [];
    for(let i = 0; i<ingredient.length; i++){
        hamburger.push(ingredient[i]);
        
        if(hamburger.slice(-4).join('') === '1231'){
            answer++;
            hamburger.splice(-4);
        }
    }
    
    return answer;
}