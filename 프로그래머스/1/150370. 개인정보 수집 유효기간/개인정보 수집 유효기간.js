function solution(today, terms, privacies) {
    const answer = [];
    
    const termsMap = new Map;
    for(let i = 0; i < terms.length; i++){
        const termName = terms[i].split(' ')[0];
        const termPeriod = terms[i].split(' ')[1];
        termsMap.set(termName, +termPeriod);
    }
    
    const todayYear = +today.split('.')[0];
    const todayMonth = +today.split('.')[1];
    const todayDay = +today.split('.')[2];
    
    for (let i = 0; i < privacies.length; i++){
        let date = privacies[i].split(' ')[0];
        let year = +date.split('.')[0];
        let month = +date.split('.')[1];
        let day = +date.split('.')[2];
        let termName = privacies[i].split(' ')[1];
        
        month += termsMap.get(termName);
        day --;
        
        if(month > 12){
            if(month % 12 === 0){
                year += parseInt(month/12) - 1;
                month = 12;
            }else{
                year += parseInt(month/12);
                month = month % 12;
            }
        }
        
        if(day === 0){
            day = 28;
            month --;
            if(month === 0){
                month = 12;
                year --;
            }
        }
        
        console.log(year, month, day);
        
        if(year < todayYear){
            answer.push(i+1);
        } else if (year === todayYear){
            if (month < todayMonth){
                answer.push(i+1);
            } else if (month === todayMonth){
                if (day < todayDay){
                    answer.push(i+1);
                }
            }
        }
    }
    return answer;
}