function solution(id_list, report, k) {
    const answer = [];
    const reportLog = {};
    
    for(let user of id_list){
        answer.push(0);
        reportLog[user] = [];
    }
    
    for(let log of report){
        const [declaredUser, reportedUser] = log.split(' ');
        if(!reportLog[reportedUser].includes(declaredUser)){
            reportLog[reportedUser].push(declaredUser);
        }
    }
    
    for(let reportedUser in reportLog){
        if (reportLog[reportedUser].length >= k){
            reportLog[reportedUser].map((user) => {
                answer[id_list.indexOf(user)] += 1;
            })
        }
    }
    
    return answer;
}