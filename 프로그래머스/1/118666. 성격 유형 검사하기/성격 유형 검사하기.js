function solution(survey, choices) {
    let answer = '';
    let prop = new Map();
    prop.set('R', 0);
    prop.set('T', 0);
    prop.set('C', 0);
    prop.set('F', 0);
    prop.set('J', 0);
    prop.set('M', 0);
    prop.set('A', 0);
    prop.set('N', 0);
    
    for(let i=0; i<choices.length; i++){
        switch(choices[i]){
            case 1:
                prop.set(survey[i][0], prop.get(survey[i][0]) + 3);
                break;
            case 2:
                prop.set(survey[i][0], prop.get(survey[i][0]) + 2);
                break;
            case 3:
                prop.set(survey[i][0], prop.get(survey[i][0]) + 1);
                break;
            case 4:
                break;
            case 5:
                prop.set(survey[i][1], prop.get(survey[i][1]) + 1);
                break;
            case 6:
                prop.set(survey[i][1], prop.get(survey[i][1]) + 2);
                break;
            case 7:
                prop.set(survey[i][1], prop.get(survey[i][1]) + 3);
                break;
        }
    }
    
    if(prop.get('T') > prop.get('R')){
        answer += 'T';
    } else {
        answer += 'R';
    }
    
    if(prop.get('F') > prop.get('C')){
        answer += 'F';
    } else {
        answer += 'C';
    }
    
    if(prop.get('M') > prop.get('J')){
        answer += 'M';
    } else {
        answer += 'J';
    }
    
    if(prop.get('N') > prop.get('A')){
        answer += 'N';
    } else {
        answer += 'A';
    }
    
    return answer;
}