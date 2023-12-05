var topKFrequent = function(nums, k) {
    //initalize a map
    let map = {}
    //count the amount of times the numbers appear
    nums.forEach(num => {
        map[num] = (map[num]|| 0) +1;
    });
    //sort the numbers in decending order based on frequency
    let sort = Object.entries(map).sort((a, b) => b[1]-a[1])
    //initalize an array
    let result = []
    //push the k most frequent numbers into result
    for(let i=0;i<k;i++){
        result.push(parseInt(sort[i]))
    }
    //return the new array
    return result
};