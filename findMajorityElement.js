var majorityElement = function(nums) {
    //initalize two pointers
    let count = 0, num=0;
    //loop through nums
    for(let val of nums){
        //if count hits 0 change the number to the current value
        if(count===0) num = val;
        //increment/decrement count if val is or is not equal to the current number
        count+=val === num ? 1 : -1
    }
    return num
};