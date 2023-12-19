class Solution {
    public boolean isAnagram(String s, String t) {
        int[] count = new int[26];
        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            count[ch-'a']++;
        }
        for(int i=0;i<t.length();i++){
            char ch = t.charAt(i);
            count[ch-'a']--;
        }
        for(int i=0;i<26;i++){
            if(count[i]!=0){
                return false;
            }
        }
        return true;
    }
}


import java.util.*;

//Hasmap solution
class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length()){
            return false;
        }
        Map<Character, Integer> map = new HashMap<Character, Integer>();
        for(int i=0;i<s.length();i++){
            if(!map.containsKey(s.charAt(i))){
                map.put(s.charAt(i), 1);
            }else{
                map.put(s.charAt(i), map.get(s.charAt(i))+1);
            }
        }
        for(int i=0;i<t.length();i++){
            if(map.containsKey(t.charAt(i))){
                if(map.containsKey(t.charAt(i)) && map.get(t.charAt(i))>0){
                    map.put(t.charAt(i), map.get(t.charAt(i))-1);
                }else{
                    return false;
                }
            }
        }
        for(Integer value: map.values()){
            if(value != 0){
                return false;
            }
        }
        return true;
    }
}