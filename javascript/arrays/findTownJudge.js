function findJudge(arr, n){
    let trust = new Array(n+1).fill(0);
    let peeps = new Array(n+1).fill(0);

    for(let x of arr){
        trust[x[0]]++;
        peeps[x[1]]++; 
    }
    for(let i=0;i<=n+1;i++){
        if(peeps[i]===n+1&&trusted[i]===0){
            return i;
        }
    }
    return -1;
}