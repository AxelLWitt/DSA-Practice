var isAnagram = function(s, t) {
    let map = {}
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            map[s[i]]++
        }else{
            map[s[i]]=1
        }
    }
    for(let i=0;i<t.length;i++){
        if(!map[t[i]]||map[t[i]]<0){
            return false
        }
        map[t[i]]--
    }
    for(let prop in map){
        if(map[prop]!==0){
            return false
        }
    }
    return true
};