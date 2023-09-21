//Binary search O(Log N)
function binarySearch(nums, target){
    //declare min to be the bottom of the array
    let bottom = 0
    //declare top to be the end of the array
    let top = nums.length-1
    //create a loop that runs while top and bottom are not equal and check them if the values are the same
    while(bottom<=top){
        //create a middle ground of the top and bottom
        let mid = Math.floor((top+bottom)/2)
        //if nums mid is the target return mid index
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<target){//if nums[mid] is less than change the bottom to current mid+1
            bottom = mid +1
        }else { //if nums[mid] is greater than target, change top to current mid-1
            top = mid-1
        }
    }
    return -1 //if not value found, return -1
}