function longestPalindrome(s) {
    let set = new Set()
    let length = 0

    for(let char of s){
        if(set.has(char)){
            length+=2
            set.delete(char)
        }else{
            set.add(char)
        }
    }
    if(set.size!==0){
        length++
    }
    return length
};