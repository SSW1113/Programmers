function maxOfArray(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

function solution(sizes) {
    var answer = 0;
    const widths = [];
    const lengths = [];
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0] > sizes[i][1]){
            widths.push(sizes[i][0]);
            lengths.push(sizes[i][1]);
        } else {
            widths.push(sizes[i][1]);
            lengths.push(sizes[i][0]);
        }
    }
    const maxWidth = maxOfArray(widths);
    const maxLength = maxOfArray(lengths);
    answer = maxWidth * maxLength;
    return answer;
}