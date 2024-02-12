class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<String>();
        backtrack(res, 0, 0, "", n);
        return res;
    }

    public void backtrack(List<String> res, int openP, int closeP, String s, int n){
        if(s.length()==n*2){
            res.add(s);
            return;
        }
        if(openP<n){
            backtrack(res, openP+1, closeP, s+"(", n);
        }

        if(closeP<openP){
            backtrack(res, openP, closeP+1, s+")", n);
        }
    }
}