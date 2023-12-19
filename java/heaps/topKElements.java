public import java.util.*;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {

        //create a map to store the elements
        //after the elements are placed into the map
        //sort them highest to lowest
        //slice the k elements off and return them
        if(nums.length==1){
            return nums;
        }
        Map<Integer, Integer> map = new HashMap<>();
        for(int num : nums) {
            map.put(num, map.getOrDefault(num, 1) + 1);
        }

        PriorityQueue<Integer> heap = new PriorityQueue<>((n1, n2) -> map.get(n1) - map.get(n2));
        for(int num : map.keySet()){
            heap.add(num);
            if(heap.size()>k){
                heap.poll();
            }
        }
        int[] kels = new int[k];
        for(int i = 0; i < k; i++){
            kels[i] = heap.poll();
        }
        return kels;
    }
}
