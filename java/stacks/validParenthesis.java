import java.util.*;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for(int i=0;i<s.length();i++){
            if(stack.isEmpty() && 
            (s.charAt(i) == ')'||s.charAt(i)=='}'||s.charAt(i)==']'))return false; else{
                if(
                    s.charAt(i) == ')' && stack.peek() == '('
                    ) stack.pop(); else if (
                    s.charAt(i) == '}' && stack.peek() == '{'
                    ) stack.pop(); else if(
                    s.charAt(i) == ']' && stack.peek() == '['
                    ) stack.pop(); else{
                    stack.push(s.charAt(i));
                    }
            }
        }
        return stack.isEmpty();
    }
}