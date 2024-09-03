function solution(a, b) {
    let month = a;
    
    for (let i=1; i<=month; i++){
        switch(i){
            case 1:
                break;
            case 2: case 4: case 6: case 8: case 9: case 11:
                b += 31;
                break;
            case 5: case 7: case 10: case 12:
                b += 30;
                break;
            case 3:
                b += 29;
                break;
        }
    }
    
    let day = b % 7;
    
    switch(day){
        case 0:
            return 'THU';
        case 1:
            return 'FRI';
        case 2:
            return 'SAT';
        case 3:
            return 'SUN';
        case 4:
            return 'MON';
        case 5:
            return 'TUE';
        case 6:
            return 'WED';
    }
}