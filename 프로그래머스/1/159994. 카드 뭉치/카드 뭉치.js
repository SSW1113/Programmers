function solution(cards1, cards2, goal) {
    var answer = '';
    let len = goal.length;
    
    for(let i=0; i<len; i++){
        if (goal[0] === cards1[0]){
            goal.shift();
            cards1.shift();
            console.log(cards1);
        } else if (goal[0] === cards2[0]){
            goal.shift();
            cards2.shift();
            console.log(cards2);
        } else {
            return 'No';
        }
    }
    
    return 'Yes'
}