class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i, x in enumerate(nums):
            diff = target-x
            if x in map:
                return [map[x], i]
            map[diff] = i