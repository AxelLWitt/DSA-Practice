import java.util.*;

class Solution {
    //function to make the longest consectivive count of numbers
    public int longestConsecutive(int[] nums) {
        //if the nums length is empty return 0
        if(nums.length==0) return 0;
        //create a hashset  to count all of the nums
        Set<Integer> set = new HashSet<>();
        //iterate through the numbers to remove duplicates in the array
        for(int i=0;i<nums.length;i++){
            set.add(nums[i]);
        }
        //initalize two new vars to count the current streak and the result
        int res = 0;
        int count = 1;
        //create a new array for a sorted array for checking if the numbers are incrementing in ones
        Integer[] tempArray = set.toArray(new Integer[0]);
        int[] sorted = new int[set.size()];
        //place the sorted array in the temp array indexes
        for(int i=0;i<set.size();i++){
            sorted[i] = tempArray[i];
        }
        //sort the sorted array 
        Arrays.sort(sorted);
        //count the number of consecutive numbers
        for(int i=1;i<sorted.length;i++){
            if((sorted[i]-sorted[i-1])==1){
                count++;
            }else{
                //if count is greater than res, set res to count if the numbers are not consecutive
                if(count>res){
                    res = count;
                }
                //then set count to 1
                count=1;
            }
        }
        //if count is greater than res return count or return res if not
        if(count>res){
            return count;
        }
        return res;
    }
}