import java.util.*;

class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        //create an int array to store the results set to 0
        int[] res = new int[temperatures.length];
        //create deque to add to the front of the stack FIFO
        Deque<Integer> deque = new ArrayDeque<>();

        //loop through the temperatures in reverse
        for(int i=temperatures.length-1;i>=0;i--){
            
            //if the deque is empty add the current index and set the result of i to 0
            if(deque.isEmpty()){
                deque.offerFirst(i);
                res[i]=0;
            }else{
                //else while deque is not empty and the current temperature is higher than the first index of deque
                while(!deque.isEmpty()&&temperatures[i]>= temperatures[deque.peekFirst()]){
                    //remove the first element of deque
                    deque.pollFirst();
                }

                //if the deque is empty, set the res index to 0
                if(deque.isEmpty()){
                    res[i] = 0;
                }else{
                    //else set the res index to the first index in deque mins the current index
                    res[i] = deque.peekFirst()-i;
                }

                //add the current index to deque to repeat
                deque.offerFirst(i);
            }
        }
        //return
        return res;
    }
}