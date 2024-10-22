// 맵 크기, op, n, 출발점, 장애물 정보를 받고 이동한 후의 위치를 반환
function move(mapsize, op, n, start, obstacle){
    const startPoint = [];
    start.forEach((e) => {
        startPoint.push(e);
    })
    // console.log('startPoint: ', startPoint);
    
    const moved = start;
    // 경로에 장애물이 있으면 출발점 반환
    for(let i = 0; i < n; i++){
        moved[op[0]] += op[1];
        for(let x of obstacle){
            if(moved[0] === x[0] && moved[1] === x[1]){
                // console.log('장애물에 가로막힘: ', startPoint);
                return startPoint;
            }
        }
    }
    
    // 맵 밖으로 나가면 출발점 반환
    if(moved[0] < 0 || moved[1] < 0 || moved[0] > mapsize[0]-1 || moved[1] > mapsize[1]-1){
        // console.log("맵 밖으로 나감: ", startPoint);
        return startPoint;
    }
    
    // console.log('이동 성공: ', moved);
    return moved;
}

function solution(park, routes) {
    let start = [];
    const obstacle = [];
    const mapsize = [park.length, park[0].length]; // [세로 , 가로]
    
    for(let i = 0; i < park.length; i++){
        for (let j = 0; j < park.length; j++){
            if(park[j][i] === "S"){
                start = [j, i];
            } else if (park[j][i] === "X"){
                obstacle.push([j, i]);
            }
        }
    }
    
    let current = start;
    for(let command of routes){
        let op = command.split(' ')[0];
        const n = command.split(' ')[1];
        
        switch(op){
            case 'E':
                op = [1, 1];
                break;
            case 'W':
                op = [1, -1];
                break;
            case 'S':
                op = [0, 1];
                break;
            case 'N':
                op = [0, -1];
                break;
        }
        
        const newpoint = move(mapsize, op, n, current, obstacle);
        current = newpoint;
    }
    
    return current;
}