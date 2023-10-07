function longestPalindrome(s) {
    //create a new set
    let set = new Set()
    //set the length to 0 to count how many letter can be placed into the palindrome
    let length = 0
    //loop through the string
    for(let char of s){
        //if the set already had the character, increase the length of the palindrome by two and remove it from the set
        if(set.has(char)){
            length+=2
            set.delete(char)
        }else{
            //add it if it does not exist
            set.add(char)
        }
    }
    //if the size of the set is not empty, we can add a single letter to the string due to the middle letter being able to mirror itself
    if(set.size!==0){
        length++
    }
    //return the length
    return length
};