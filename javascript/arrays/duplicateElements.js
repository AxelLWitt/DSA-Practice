var removeDuplicates = function(nums) {
    //intialize a pointer
    let k=0
    for(let i=0;i<nums.length;i++){
        //assuming this is a sorted array, if the preceeding number is not the same
        if(nums[i]!==nums[i-1]){
            //the positions change based on the pointer k
            nums[k]=nums[i]
            k++
        }
    }
    //return k
    return k;
};