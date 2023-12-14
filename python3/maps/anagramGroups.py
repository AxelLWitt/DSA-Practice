class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}
        for x in strs:
            strSort = ''.join(sorted(x))
            if strSort not in map:
                map[strSort] = []
            map[strSort].append(x)
        return map.values()