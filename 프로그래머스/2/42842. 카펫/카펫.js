function solution(brown, yellow) {
    let width;
    let height;
    
    for(let i = 1; i <= yellow; i++){
        if(yellow % i === 0){
            const yellowHeight = i;
            const yellowWidth = yellow / i;
            
            if((yellowWidth + 2) * (yellowHeight + 2) === brown + yellow){
                width = yellowWidth + 2;
                height = yellowHeight + 2;
                break;
            }
        } 
    }
    
    return [width, height];
}