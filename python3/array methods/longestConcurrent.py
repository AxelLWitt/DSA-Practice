class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        nums_set = set(nums)
        longest = 0

        for num in nums_set:
            if num - 1 not in nums_set:
                curr = num
                curr_streak = 1
            
                while curr+1 in nums_set:
                    curr_streak+=1
                    curr = curr+1
            
                longest = max(longest, curr_streak)
        
        return longest 