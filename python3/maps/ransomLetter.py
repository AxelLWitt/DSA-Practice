class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        map = {}
        for x in magazine:
            if x not in map:
                map[x] = 0
            map[x]+=1
        for x in ransomNote:
            if x in map and map[x]>0:
                map[x]-=1
            else:
                return False
        return True