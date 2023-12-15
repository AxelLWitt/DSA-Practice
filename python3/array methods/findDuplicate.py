class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        # set fast pointer and slow
        slow = nums[0]
        fast = nums[0]
        #loop while they are not the same value
        while True:
            #set slow to iterate 
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        #loop again and set hare back to the start of the array
        slow = nums[0]
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]
        return fast
    
    #O(1)