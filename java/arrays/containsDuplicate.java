import java.util.*;

class Solution {
    //function for finding duplicate
    public boolean containsDuplicate(int[] nums) {
        //create a hashset to contain all the numbers
        Set<Integer> set = new HashSet<Integer> ();
        //iterate through the nums array
        for(int i=0;i<nums.length;i++){
            //add each of the nums to the hashset
            set.add(nums[i]);
        }
        //return whether the hashset is equal to the input array as the set will contain no duplicates
        return set.size() != nums.length;
    }
}
