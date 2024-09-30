function solution(s, skip, index) {
    let answer = "";
    let string = s.split('');
    string.map((item) => {
        let asci = item.charCodeAt();
        for (let i = 0; i < index; i++){
            asci++;
            if(asci > 122){
                asci = 97;
            }
            
            while(skip.includes(String.fromCharCode(asci))){
                asci++;
                if(asci > 122){
                    asci = 97;
                }
            }
        }
        answer += String.fromCharCode(asci);
    })
    
    return answer;
}