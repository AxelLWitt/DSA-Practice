var generateParenthesis = function(n) {
    //stack to contain permutaion
    let stack = [];
    //empty array for storing final res
    let res = [];
    //helper function
    function track(open, close){
        //if open, close and n are all the same
        if(open === close && open === n && close === n){
            //conv it into a string
            let str = stack.join('');
            //add it to the result tab
            res.push(str)
            //return the value
            return
        }
        //if the open count is less than n
        if(open < n){
            //push another valid ( into the stack
            stack.push('(')
            //recursivley call the helper to continue with validpermutations
            track(open+1, close)
            //recurisive backtracking
            stack.pop()
        }
        //same as above
        if(close < open){
            stack.push(')');
            track(open, close+1);
            stack.pop();
        }
    }
    //using recursive function
    track(0,0)
    return res;
};