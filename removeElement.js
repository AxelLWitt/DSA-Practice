var removeElement = function(nums, val) {
    //keep track of the location of the pointer
    let k = 0
    for(let i=0;i<nums.length;i++){
        //if the number is not the value
        if(nums[i]!==val){
            //change the location to the next location where the value is
            nums[k]=nums[i]
            //increment
            k++
        }
    }
    //return the length
    return k;
};

//this is just rearanging the elements. idk why they worded it as remove