import java.util.HashMap;
import java.util.Map;

class Solution{
    public int[] twoSum(int[] nums, int target){
        Map<Integer, Integer> map = new Hashmap<>()
        for(int i=0;i<nums.length;i++){
            int diff = target - nums[i];
            if(map.containsKey(diff)){
                return new int[] {map.get(diff), i};
            };
            map.put(nums[i], i);
        };
        throw new IllegalArgumentException('No nums found')
    };
};