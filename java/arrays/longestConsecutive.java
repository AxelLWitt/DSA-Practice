import java.util.*;

class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length==0) return 0;
        Set<Integer> set = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            set.add(nums[i]);
        }
        int res = 0;
        int count = 1;
        Integer[] tempArray = set.toArray(new Integer[0]);
        int[] sorted = new int[set.size()];
        for(int i=0;i<set.size();i++){
            sorted[i] = tempArray[i];
        }
        Arrays.sort(sorted);
        for(int i=1;i<sorted.length;i++){
            if((sorted[i]-sorted[i-1])==1){
                count++;
            }else{
                if(count>res){
                    res = count;
                }
                count=1;
            }
        }
        if(count>res){
            return count;
        }
        return res;
    }
}