import java.util.*;

class Solution {

    private Stack<Double> stack = new Stack<>();

    public int evalRPN(String[] tokens) {
        for(int i =0;i<tokens.length;i++){
            switch(tokens[i]){
                case("+"):
                    stack.push(stack.pop()+stack.pop());
                    break;
                case("-"):
                    double min1 = stack.pop(), min2 = stack.pop();
                    stack.push(min2-min1);
                    break;
                case("*"):
                    stack.push(stack.pop()*stack.pop());
                    break;
                case("/"):
                    double div1 = stack.pop(), div2 = stack.pop();
                    stack.push((div2/div1) < 0 ? Math.ceil(div2/div1) : Math.floor(div2/div1));
                    break;
                default:
                    stack.push(Double.parseDouble(tokens[i]));
                    break;
            }
        }
        return stack.pop().intValue();
    }
}

//using an int will speed this up significantly
