function engToNumber(s){
    switch(s.join('')){
        case 'zero':
            return 0;
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        default:
            return null;
    }
}

function solution(s) {
    var answer = [];
    let temp = [];
    
    for(let i=0; i<s.length; i++){
        if(s[i]%1 !== 0){
            temp.push(s[i]);
        }
        else if (s[i]%1 === 0){
            answer.push(Number(s[i]));
            continue;
        }

        if(engToNumber(temp) !== null){
            answer.push(engToNumber(temp));
            temp = [];
        }
    }
    
    return Number(answer.join(''));
}