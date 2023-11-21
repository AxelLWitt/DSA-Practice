var productExceptSelf = function(nums) {
    //declare empty array
    let res = [nums.length]
    //declare product to keep track of left sums
    let prod = 1
    //loop through right values
    for(let i=0;i<nums.length;i++){
        //set the new array index to the product variable
        res[i]=prod
        //assign product to the current iteration of nums
        prod = nums[i]*prod
    }
    //reset product
    prod = 1
    //loop through from the end of the array
    for(let i=nums.length;i>=0;i--){
        //set res[i] to product of the last integer of the array and the last of res
        res[i]=res[i]*prod
        //set product to index of nums[i] and multiply to the left
        prod=nums[i]*prod
    }
    //return the result array
    return res
};