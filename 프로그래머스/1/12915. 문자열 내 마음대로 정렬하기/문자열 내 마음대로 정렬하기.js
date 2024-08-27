function solution(strings, n) {
    const newArr= [];
    for(let i=0; i<strings.length; i++)
        newArr.push(...strings[i][n]);

    for(let i=0; i<strings.length; i++)
        strings[i] = newArr[i].concat(strings[i]);

    strings.sort();

    for(let i=0; i<strings.length; i++)
        strings[i] = strings[i].substring(1);

    return strings
}