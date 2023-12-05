var groupAnagrams = function(strs) {
    //initalize a map
    let map = {}
    //iterate through the strings
    for(let i=0;i<strs.length;i++){
        //create a sorted key for each string
        let sort = strs[i].split('').sort().join('')
        //if the map does not have the sorted value, add the key with the value and initalize an empty array
        if(!map[sort]){
            map[sort]=[]
        }
        //push the string into the sorted array
        map[sort].push(strs[i])
    }
    //return the values of the object
    return Object.values(map)
};