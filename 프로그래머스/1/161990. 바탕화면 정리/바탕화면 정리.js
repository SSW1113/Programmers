function solution(wallpaper) {
    var answer = [];
    const files = [];
    for(let x = 0; x < wallpaper.length; x++){
        for (let y = 0; y < wallpaper[x].length; y++){
            if(wallpaper[x][y] === '#'){
                files.push([x,y]);
            }
        }
    }
    
    let [lux, luy, rdx, rdy] = [wallpaper.length, wallpaper[0].length, 0, 0];
    for (let file of files){
        if(file[0] < lux){
            lux = file[0];
        }
        if(file[1] < luy){
            luy = file[1];
        }
        
        if(file[0] > rdx){
            rdx = file[0];
        }
        if(file[1] > rdy){
            rdy = file[1];
        }
    }
    rdx ++;
    rdy ++;
    answer = [lux, luy, rdx, rdy];
    return answer;
}