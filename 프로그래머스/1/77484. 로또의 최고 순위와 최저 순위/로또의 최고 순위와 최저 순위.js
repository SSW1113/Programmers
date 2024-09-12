function solution (lottos, win_nums) {
    let correct = 0;
    let zeros = 0;
    const answer = [];

    for (let i=0; i<lottos.length; i++){
        if (lottos[i] === 0)
            zeros++;
    }
    console.log(zeros);

    for (let i=0; i<win_nums.length; i++){
        const found = lottos.find((n) => n === win_nums[i])
        if(found){
            correct++;
        }
    }

    console.log(correct);

    const maxCorrect = zeros + correct;

    switch(maxCorrect){
        case 0:
        case 1:
            answer.push(6);
            break;
        case 2:
            answer.push(5);
            break;
        case 3:
            answer.push(4);
            break;
        case 4:
            answer.push(3);
            break;
        case 5:
            answer.push(2);
            break;
        case 6:
            answer.push(1);
            break;
    }
    
    switch(correct){
        case 0:
        case 1:
            answer.push(6);
            break;
        case 2:
            answer.push(5);
            break;
        case 3:
            answer.push(4);
            break;
        case 4:
            answer.push(3);
            break;
        case 5:
            answer.push(2);
            break;
        case 6:
            answer.push(1);
            break;
    }

    return answer;
}