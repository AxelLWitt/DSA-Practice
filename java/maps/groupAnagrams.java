import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs.length==0){
            return new ArrayList<List<String>>();
        }
        Map<String, List<String>> map = new HashMap<>();
        for(String s : strs){
            char[] split = s.toCharArray();
            Arrays.sort(split);
            String sorted = new String(split);
            map.putIfAbsent(sorted, new ArrayList<>());
            map.get(sorted).add(s);
        }
        return new ArrayList<>(map.values());
    }
}