import java.util.*;

class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        //default case
        if(position.length==1) return 1;
        //stack that accepts large ints
        Stack<Double> stack = new Stack<>();
        //2d array that stores the position and the speed of the car with two indexes
        int[][] comb = new int[position.length][2];
        //populate the array with the proper position and speed info
        for(int i =0; i<position.length;i++){
            comb[i][0] = position[i];
            comb[i][1] = speed[i];
        }
        //sort the array comparing the positions
        //place the positions in decending order
        Arrays.sort(comb, java.util.Comparator.comparingInt(o -> o[0]));
        //iterate through comb
        for(int i=comb.length-1;i>=0;i--){
            //set the current time to a double and convert the 2d ints into a double
            //subtract the target from the position and divide it by the speed
            double currTime = (double) (target - comb[i][0])/comb[i][1];
            //if the stack is not empty, and the current time is less than the stack, continue the loop
            if(!stack.isEmpty()&&currTime<=stack.peek()){
                continue;
            }else{
                //else push the current time into the stack signaling a combined car fleet
                stack.push(currTime);
            }
        }
        //return the size of the stack, signaling how many car fleets there are
        return stack.size();
    }
}

//optimized version with no stack operation

class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        //store amount of carfleets
        int res = 0;
        //create a array of doubles up to the target number of 0's
        double[] timeArr = new double[target];
        //iterate through the positions, changing the index of timeArr to a double from the target - position index div by the speed index
        for(int i=0;i<position.length;i++){
            timeArr[position[i]] = (double)(target - position[i])/speed[i];
        }
        //set the prev to the minimum
        double prev = 0.0;
        //iterate through the timeArr
        for(int i = timeArr.length-1;i>=0;i--){
            //set the current time to the time of the index of timeArr
            double curr = timeArr[i];
            //if the curr is greater than the previous
            if(curr>prev){
                //set previous to curr and increase res by 1
                prev=curr;
                res++;
            }
        }
        return res;
    }
}