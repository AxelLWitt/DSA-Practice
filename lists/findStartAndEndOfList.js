var searchRange = function(nums, target) {
    //edge case handling if the array is empty
    if(!nums.length){
        return [-1,-1]
    }
    //initalize pointers and the points where the target shows
    let min = 0
    let max = nums.length-1
    let start = -1;
    let end = -1
    //while the min is less than max run the loop for binary search
    while(min<=max){
        //initalize mid for dynamic updating
        let mid = Math.floor((min+max)/2)
        //check conditions if nums[mid] is the target and search for first instance
        if(nums[mid]===target){
            start = mid
            max = mid - 1
        }else if(nums[mid]>target){ //typical binary search value
            max = mid-1
        }else{
            min = mid + 1
        }
    }
    //reset the pointers
    min = 0
    max = nums.length-1
    //rerun the binary search, this time looking for the last instance of the number
    while(min<=max){
        let mid = Math.floor((min+max)/2)
        if(nums[mid]===target){
            end = mid
            min = mid + 1
        }else if(nums[mid]>target){
            max = mid-1
        }else{
            min = mid + 1
        }
    }
    return [start, end]
};