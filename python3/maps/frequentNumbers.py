class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = {}
        for x in nums:
            if x not in map:
                map[x] = 0
            map[x]+=1
        sort = dict(sorted(map.items(), key=lambda item: item[1], reverse=True))
        toSlice = slice(k)
        keys = list(sort.keys())
        return keys[toSlice]