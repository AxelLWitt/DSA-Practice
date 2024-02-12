var nextGreaterElement = function(nums1, nums2) {
    //use map to store values
    let map = {};
    //stack
    let stack = []
    //iterate through the larger array
    for(let i=0;i<nums2.length;i++){
        //while the curr num is greater than the num in the stack
        while(nums2[i]>stack.at(-1)){

            //add the num to the stack and set it to the value of the num of the array
            map[stack.pop()]= nums2[i]
        }
        //push the new num to the stack 
        stack.push(nums2[i])
    }
    //map the map to return the equal amount of values
    return nums1.map(num => map[num] ?? -1)
};