function solution(answers) {
    var answer = [];
    
    const no1 = [1,2,3,4,5];
    const no2 = [2,1,2,3,2,4,2,5];
    const no3 = [3,3,1,1,2,2,4,4,5,5];
    let grade1 = 0;
    let grade2 = 0;
    let grade3 = 0;
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === no1[i%5]){
            grade1++;
        }
    }
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === no2[i%8]){
            grade2++;
        }
    }
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === no3[i%10]){
            grade3++;
        }
    }
    
    let maxGrade = Math.max(grade1, grade2, grade3);
    if(maxGrade === grade1){
        answer.push(1);
    }
    if(maxGrade === grade2){
        answer.push(2);
    }
    if(maxGrade === grade3){
        answer.push(3);
    }
    
    return answer;
}