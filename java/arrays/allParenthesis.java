class Solution {
    //create main function
    public List<String> generateParenthesis(int n) {
        //initate a new list of strings
        List<String> res = new ArrayList<String>();
        //call the helper function starting
        backtrack(res, 0, 0, "", n);
        //once the backtracking function is complete, return the results
        return res;
    }

    //helper function
    //breakdown: function is responsible for adding and subtracting the amount of parenthesis added to the 
    //the fucntion will get all combonations through the recursive back tracking
    public void backtrack(List<String> res, int openP, int closeP, String s, int n){
        //if the length of the string is n*2, add the string to the res ArrayList  
        if(s.length()==n*2){
            res.add(s);
            return;
        }
        //else if openP is less than n, recusivley call the function till the condition is met
        if(openP<n){
            backtrack(res, openP+1, closeP, s+"(", n);
        }
        //or add closed Parenthases till the condition is met
        if(closeP<openP){
            backtrack(res, openP, closeP+1, s+")", n);
        }
    }
}