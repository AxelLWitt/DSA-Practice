import java.util.*;

class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int[] res = new int[temperatures.length];
        Deque<Integer> deque = new ArrayDeque<>();

        for(int i=temperatures.length-1;i>=0;i--){
            
            if(deque.isEmpty()){
                deque.offerFirst(i);
                res[i]=0;
            }else{
                while(!deque.isEmpty()&&temperatures[i]>= temperatures[deque.peekFirst()]){
                    deque.pollFirst();
                }

                if(deque.isEmpty()){
                    res[i] = 0;
                }else{
                    res[i] = deque.peekFirst()-i;
                }

                deque.offerFirst(i);
            }
        }
        return res;
    }
}