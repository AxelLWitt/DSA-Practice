function findJudge(arr, n){
    //set two arrays to the amount of people in n + 1
    //peeps for how many people that person trusts
    let trust = new Array(n+1).fill(0);
    //trust for how many people that person is trusted by
    let peeps = new Array(n+1).fill(0);

    //iterate through the subindex and add the count using the index
    //index 0 goes to count how many people that person trusts
    //index 1 goes to the person that person trusts
    for(let x of arr){
        trust[x[0]]++;
        peeps[x[1]]++; 
    }
    //iterate through both of the array to find the person everyone trusts, but trusts noone
    for(let i=0;i<=n+1;i++){
        if(peeps[i]===n+1&&trusted[i]===0){
            return i;
        }
    }
    return -1;
}