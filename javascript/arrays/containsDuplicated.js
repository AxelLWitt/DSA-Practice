var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    return false
};

var containsDuplicate = function(nums){
    let map = {}
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            return true
        }
        map[nums[i]]=i
    }
    return false
}