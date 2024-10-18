function solution(players, callings) {
    const playerMap = new Map;
    
    for (let i = 0; i < players.length; i++){
        playerMap.set(players[i], i);
    }
    
    for (let i = 0; i < callings.length; i++){
        const name = callings[i];
        const index = playerMap.get(callings[i]);
        const frontPlayer = players[index - 1];
        
        players[index - 1] = name;
        players[index] = frontPlayer;
        
        playerMap.set(name, index - 1);
        playerMap.set(frontPlayer, index);
    }
    
    return players;
}