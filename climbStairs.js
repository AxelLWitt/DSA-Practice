function climbStairs(n) {
    if(n===1){
        return 1
    }
    let one = 1
    let two = 2
    for(let i=3;i<=n;i++){
        let three = one + two
        one = two
        two = three
    }
    return two
};